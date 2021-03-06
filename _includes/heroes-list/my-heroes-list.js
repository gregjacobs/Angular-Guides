angular.module( 'heroes' ).component( 'myHeroesList', {
	bindings : {
		heroes       : '<',
		onHeroSelect : '&'
	},

	templateUrl : 'heroes-list/my-heroes-list.html',
	controller  : MyHeroesListController
} );


function MyHeroesListController() {
	var ctrl = this;

	ctrl.selectedHero = null;

	/**
	 * @param {Hero} hero
	 */
	ctrl.selectHero = function( hero ) {
		ctrl.selectedHero = hero;

		ctrl.onHeroSelect( { $hero: hero } );  // notify listeners
	}
}