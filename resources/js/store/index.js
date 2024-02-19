import {createStore} from 'vuex'

import example from "./modules/example/index.js";

export default createStore({
	modules: {
		example
	},
});