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
        this.$state = { ...this.$state, ...newState };
        this.render();
    }
    addEvent(eventName, selector, callback) {
        console.log(selector, callback);
        const children = [...this.$target.querySelectorAll(selector)];
        const isTarget = (target) =>
            children.includes(target) || target.closest(selector);
        this.$target.addEventListener(eventName, (ev) => {
            if (!isTarget(ev.target)) return;
            callback(ev);
        });
    }
}
