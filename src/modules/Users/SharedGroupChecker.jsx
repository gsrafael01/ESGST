import { Module } from '../../class/Module';
import { Popup } from '../../class/Popup';
import { Utils } from '../../lib/jsUtils';
import { common } from '../Common';
import { Shared } from '../../class/Shared';
import { Settings } from '../../class/Settings';
import { permissions } from '../../class/Permissions';
import { DOM } from '../../class/DOM';

const createElements = common.createElements.bind(common),
	endless_load = common.endless_load.bind(common),
	getFeatureTooltip = common.getFeatureTooltip.bind(common),
	request = common.request.bind(common);
class UsersSharedGroupChecker extends Module {
	constructor() {
		super();
		this.info = {
			description: () => (
				<ul>
					<li>
						Adds a button (<i className="fa fa-users"></i>) next to a user's username (in their{' '}
						<a href="https://www.steamgifts.com/user/cg">profile</a> page) that allows you to check
						which groups you are both members of.
					</li>
				</ul>
			),
			id: 'sgc',
			name: 'Shared Group Checker',
			sg: true,
			type: 'users',
			featureMap: {
				profile: this.sgc_add.bind(this),
			},
		};
	}

	sgc_add(profile) {
		if (profile.username === Settings.get('username')) {
			// no point in checking which groups a user shares with themselves
			return;
		}
		profile.sgcButton = createElements(profile.heading, 'beforeend', [
			{
				attributes: {
					class: 'esgst-sgc-button',
					title: getFeatureTooltip('sgc', 'Check shared groups'),
				},
				type: 'a',
				children: [
					{
						attributes: {
							class: 'fa fa-users',
						},
						type: 'i',
					},
				],
			},
		]);
		profile.sgcButton.addEventListener('click', this.sgc_open.bind(this, profile));
	}

	async sgc_open(profile) {
		if (profile.sgcPopup) {
			profile.sgcPopup.open();
		} else {
			if (!(await permissions.contains([['steamCommunity']]))) {
				return;
			}

			profile.sgcPopup = new Popup({
				addScrollable: true,
				icon: 'fa-users',
				title: 'Shared Groups',
			});
			profile.sgcProgress = createElements(profile.sgcPopup.description, 'beforeend', [
				{
					type: 'div',
					children: [
						{
							attributes: {
								class: 'fa fa-circle-o-notch fa-spin',
							},
							type: 'i',
						},
						{
							text: 'Checking shared groups...',
							type: 'span',
						},
					],
				},
			]);
			profile.sgcResults = createElements(profile.sgcPopup.scrollable, 'beforeend', [
				{
					attributes: {
						class: 'esgst-sgc-results esgst-glwc-results esgst-text-left',
					},
					type: 'div',
					children: [
						{
							type: 'div',
							children: [
								{
									attributes: {
										class: 'esgst-glwc-heading',
									},
									text: 'Public',
									type: 'div',
								},
								{
									attributes: {
										class: 'table esgst-hidden',
									},
									type: 'div',
									children: [
										{
											attributes: {
												class: 'table__heading',
											},
											type: 'div',
											children: [
												{
													attributes: {
														class: 'table__column--width-fill',
													},
													text: 'Group',
													type: 'div',
												},
											],
										},
										{
											attributes: {
												class: 'table__rows',
											},
											type: 'div',
										},
									],
								},
							],
						},
						{
							type: 'div',
							children: [
								{
									attributes: {
										class: 'esgst-glwc-heading',
									},
									text: 'Private',
									type: 'div',
								},
								{
									attributes: {
										class: 'table esgst-hidden',
									},
									type: 'div',
									children: [
										{
											attributes: {
												class: 'table__heading',
											},
											type: 'div',
											children: [
												{
													attributes: {
														class: 'table__column--width-fill',
													},
													text: 'Group',
													type: 'div',
												},
											],
										},
										{
											attributes: {
												class: 'table__rows',
											},
											type: 'div',
										},
									],
								},
							],
						},
					],
				},
			]);
			profile.sgcPublic = profile.sgcResults.firstElementChild.lastElementChild;
			profile.sgcPublicResults = profile.sgcPublic.lastElementChild;
			profile.sgcPrivate = profile.sgcResults.lastElementChild.lastElementChild;
			profile.sgcPrivateResults = profile.sgcPrivate.lastElementChild;
			profile.sgcPopup.open();
			// noinspection JSIgnoredPromiseFromCall
			this.sgc_load(profile);
		}
	}

	async sgc_load(profile) {
		const publicGroups = [];
		const privateGroups = [];
		let response = await request({
			method: 'GET',
			url: `http://steamcommunity.com/profiles/${profile.steamId}/groups/common`,
		});
		let responseHtml = DOM.parse(response.responseText);
		let isLoggedIn = true;
		if (!responseHtml.getElementById('groups_list')) {
			response = await request({
				method: 'GET',
				url: `http://steamcommunity.com/profiles/${profile.steamId}/groups`,
			});
			responseHtml = DOM.parse(response.responseText);
			isLoggedIn = false;
		}
		const elements = responseHtml.getElementsByClassName('group_block');
		for (const element of elements) {
			const name = element.getElementsByClassName('linkTitle')[0].textContent;
			const avatar = element
				.getElementsByClassName('avatarMedium')[0]
				.firstElementChild.firstElementChild.getAttribute('src');
			const steamId = element.querySelector('.steamLink').getAttribute('href').match(/\d+/)[0];
			let i;
			for (
				i = Shared.esgst.groups.length - 1;
				i > -1 && Shared.esgst.groups[i].steamId !== steamId;
				i--
			) {}
			if (!isLoggedIn && (i < 0 || !Shared.esgst.groups[i].member)) {
				continue;
			}
			(element.getElementsByClassName('pubGroup')[0] ? publicGroups : privateGroups).push({
				name: name,
				html: [
					{
						attributes: {
							class: 'table__row-outer-wrap',
						},
						type: 'div',
						children: [
							{
								attributes: {
									class: 'table__row-inner-wrap',
								},
								type: 'div',
								children: [
									{
										type: 'div',
										children: [
											{
												attributes: {
													class: 'table_image_avatar',
													href: `/go/group/${steamId}`,
													style: `background-image:url(${avatar})`,
												},
												type: 'a',
											},
										],
									},
									{
										attributes: {
											class: 'table__column--width-fill',
										},
										type: 'div',
										children: [
											{
												attributes: {
													class: 'table__column__heading',
													href: `/go/group/${steamId}`,
												},
												type: 'a',
											},
										],
									},
								],
							},
						],
					},
				],
			});
		}
		const n1 = publicGroups.length;
		const n2 = privateGroups.length;
		if (n1 || n2) {
			if (n1 > 0) {
				Utils.sortArray(publicGroups, false, 'name').map((x) => {
					createElements(profile.sgcPublicResults, 'beforeend', x.html).getElementsByClassName(
						'table__column__heading'
					)[0].textContent = x.name;
				});
				profile.sgcPublic.classList.remove('esgst-hidden');
			} else {
				createElements(profile.sgcPublic, 'atouter', [
					{
						text: 'No shared public groups found.',
						type: 'div',
					},
				]);
			}
			if (n2 > 0) {
				Utils.sortArray(privateGroups, false, 'name').map((x) => {
					createElements(profile.sgcPrivateResults, 'beforeend', x.html).getElementsByClassName(
						'table__column__heading'
					)[0].textContent = x.name;
				});
				profile.sgcPrivate.classList.remove('esgst-hidden');
			} else {
				createElements(profile.sgcPrivate, 'atouter', [
					{
						text: 'No shared private groups found.',
						type: 'div',
					},
				]);
			}
			profile.sgcProgress.remove();
			profile.sgcProgress = null;
		} else {
			createElements(profile.sgcProgress, 'atinner', [
				{
					text: 'No shared groups found.',
					type: 'node',
				},
			]);
		}
		endless_load(profile.sgcResults);
	}
}

const usersSharedGroupChecker = new UsersSharedGroupChecker();

export { usersSharedGroupChecker };
