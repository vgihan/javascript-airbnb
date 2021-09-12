export class Component {
    $target;
    $state;
    $props;
    constructor($target, $props) {
        this.$target = $target;
        this.$props = $props;
        this.setup();
        this.render();
        this.setEvent();
    }
    setup() {}
    template() {
        return "";
    }
    mounted() {}
    render() {
        this.$target.innerHTML = this.template();
        this.mounted();
    }
    setEvent() {}
    setState(newState) {
        this.$state = newState;
        this.render();
    }
    addEvent(eventName, selector, callback) {
        this.$target
            .querySelector(selector)
            .addEventListener(eventName, callback);
    }
}
