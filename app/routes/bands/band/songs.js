import Route from '@ember/routing/route';
export default class BandsBandSongRoute extends Route {
  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
