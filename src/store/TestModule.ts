import store from "@/store/store";
import {Action, getModule, Module, Mutation, VuexModule} from "vuex-module-decorators";

@Module({dynamic: true, store, name: "TestModule}"})
export default class TestModule extends VuexModule {
}

export const testModule: TestModule = getModule(TestModule);