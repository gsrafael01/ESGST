import { Module } from '../../class/Module';
import { Settings } from '../../class/Settings';
import { EventDispatcher } from '../../class/EventDispatcher';
import { Events } from '../../constants/Events';
import { Session } from '../../class/Session';
import { Shared } from '../../class/Shared';
import { DOM } from '../../class/DOM';

class GeneralPointsVisualizer extends Module {
	constructor() {
		super();
		this.info = {
			colors: {
				barColor: 'Bar Color',
				barColorHover: `Bar Color (Hover / Account Page)`,
				barColorSelected: `Bar Color (Account Page Hover)`,
			},
			description: () => (
				<ul>
					<li>
						Displays a green bar in the account button at the header of any page that represents the
						amount of points that you have.
					</li>
				</ul>
			),
			id: 'pv',
			name: 'Points Visualizer',
			sg: true,
			type: 'general',
		};
	}

	init() {
		EventDispatcher.subscribe(Events.POINTS_UPDATED, this.pv_setStyle.bind(this));

		this.pv_setStyle(null, Session.counters.points);

		this.esgst.modules.generalLevelProgressVisualizer.joinStyles();
	}

	pv_setStyle(oldPoints, newPoints) {
		const points = Math.min(400, newPoints);
		const percentage = (points / 400) * 100;
		const mainButtonWidth = Shared.header.buttonContainers['account'].nodes.button.offsetWidth;
		const fullButtonWidth = Shared.header.buttonContainers['account'].nodes.outer.offsetWidth;
		const progress = Math.trunc(percentage * (fullButtonWidth / 100)); // 186px is the width of the button
		const firstBar = `${progress}px`;
		const secondBar = `${Math.max(0, progress - mainButtonWidth)}px`; // 157px is the width of the button without the arrow
		const barColor = Settings.get('pv_barColor');
		const barColorHover = Settings.get('pv_barColorHover');
		const barColorSelected = Settings.get('pv_barColorSelected');
		this.esgst.pvStyleArray = [
			{
				selector: '.esgst-lpv-container',
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColor} ${firstBar}, transparent ${firstBar})`,
							`var(--esgst-lpv-button, linear-gradient(#8a92a1 0px, #757e8f 8px, #4e5666 100%))`,
						],
					},
				],
			},
			{
				selector: `.esgst-lpv-container .nav__button--is-dropdown:hover`,
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColorHover} ${firstBar}, transparent ${firstBar})`,
							`var(--esgst-lpv-button-hover, linear-gradient(#9ba2b0 0px, #8c94a3 8px, #596070 100%))`,
						],
					},
				],
			},
			{
				selector: `.esgst-lpv-container .nav__button--is-dropdown-arrow:hover`,
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColorHover} ${secondBar}, transparent ${secondBar})`,
							`var(--esgst-lpv-button-hover, linear-gradient(#9ba2b0 0px, #8c94a3 8px, #596070 100%))`,
						],
					},
				],
			},
			{
				selector: '.esgst-lpv-container .nav__button--is-dropdown-arrow.is-selected',
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColor} ${secondBar}, transparent ${secondBar})`,
							`var(--esgst-lpv-arrow, linear-gradient(#4e525f 0px, #434857 5px, #2b2e3a 100%))`,
						],
					},
				],
			},
			{
				selector: '.esgst-lpv-container.is-selected .nav__button--is-dropdown',
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColorHover} ${firstBar}, transparent ${firstBar})`,
							`var(--esgst-lpv-button-selected, linear-gradient(#d0d5de 0px, #c9cdd7 5px, #9097a6 100%))`,
						],
					},
				],
			},
			{
				selector: '.esgst-lpv-container.is-selected .nav__button--is-dropdown-arrow',
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColorHover} ${secondBar}, transparent ${secondBar})`,
							`var(--esgst-lpv-button-selected, linear-gradient(#d0d5de 0px, #c9cdd7 5px, #9097a6 100%))`,
						],
					},
				],
			},
			{
				selector: `.esgst-lpv-container.is-selected .nav__button--is-dropdown:hover`,
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColorSelected} ${firstBar}, transparent ${firstBar})`,
							`var(--esgst-lpv-button-selected-hover, linear-gradient(#f0f1f5 0px, #d1d4de 100%))`,
						],
					},
				],
			},
			{
				selector: `.esgst-lpv-container.is-selected .nav__button--is-dropdown-arrow:hover:not(.is-selected)`,
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColorSelected} ${secondBar}, transparent ${secondBar})`,
							`var(--esgst-lpv-button-selected-hover, linear-gradient(#f0f1f5 0px, #d1d4de 100%))`,
						],
					},
				],
			},
			{
				selector: '.esgst-lpv-container.is-selected .nav__button--is-dropdown-arrow.is-selected',
				rules: [
					{
						name: 'background-image',
						values: [
							`linear-gradient(to right, ${barColorSelected} ${secondBar}, transparent ${secondBar})`,
							`var(--esgst-lpv-arrow-selected, linear-gradient(#4e525f 0px, #434857 5px, #2b2e3a 100%))`,
						],
					},
				],
			},
		];
	}
}

const generalPointsVisualizer = new GeneralPointsVisualizer();

export { generalPointsVisualizer };
