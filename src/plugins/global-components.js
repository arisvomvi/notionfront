// import { defineComponent } from 'vue';
console.log('Yo globalcomponents');

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

// import { defineCustomElement } from 'vue';
// console.log('Yo global components');

// // Automatically import all components from the 'components/base' directory
// const requireComponent = import.meta.glob('@components/base/**/*.vue', { eager: true });

// export default {
//   install(app) {
//     // Register each component globally as Vue components
//     for (const path in requireComponent) {
//       const component = requireComponent[path].default;
//       app.component(`Gng${component.name}`, component);

//       // Convert the component to a custom element
//       const CustomElement = defineCustomElement(component);

//       // Define the custom element with the appropriate name
//       customElements.define(`gng-${component.name.toLowerCase()}`, CustomElement);
//     }
//   },
// };
