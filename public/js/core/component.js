export class Component {
    $target;
    $state;
    constructor($target) {
        this.$target = $target;
        this.setup();
        this.render();
    }
    setup() {}
    template() { return ''; }
    render()
}