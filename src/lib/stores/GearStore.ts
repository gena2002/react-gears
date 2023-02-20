import {makeObservable, observable} from "mobx";
import AlertStore from "./sub_stores/AlertStore";
import StringValueStore from "./sub_stores/StringValueStore";
import LangStore from "./sub_stores/LangStore";
import LogsStore from "./sub_stores/LogsStore";

export default class GearStore {
    constructor() {
        makeObservable(this);
    }

    /* sub stores */

    @observable
    public readonly alert = new AlertStore();

    @observable
    public readonly lang = new LangStore();

    @observable
    public readonly previous_page = new StringValueStore();

    @observable
    public readonly console = new LogsStore();
    /* THE END of sub stores */

}