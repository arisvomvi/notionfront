import { defineComponent } from 'vue';

// Automatically import all components from the 'components/base' directory
const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

export default {
  install(app) {
    // Register each component globally
    for (const path in requireComponent) {
      const component = requireComponent[path].default;
      app.component(`Gng${component.name}`, component);
    }
  },
};
