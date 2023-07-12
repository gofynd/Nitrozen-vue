declare module '@gofynd/nitrozen-vue' {
    import { DirectiveOptions, VueConstructor } from 'vue'
    import * as Nitrozen from '@gofynd/nitrozen-vue'

    // Components
    const NitrozenAutocomplete: VueConstructor
    const NitrozenButton: VueConstructor
    const NitrozenBadge: VueConstructor
    const NitrozenCheckBox: VueConstructor
    const NitrozenChips: VueConstructor
    const NitrozenDropdown: VueConstructor
    const NitrozenDialog: VueConstructor
    const NitrozenError: VueConstructor
    const NitrozenInline: VueConstructor
    const NitrozenInput: VueConstructor
    const NitrozenMenu: VueConstructor
    const NitrozenMenuItem: VueConstructor
    const NitrozenTab: VueConstructor
    const NitrozenTabItem: VueConstructor
    const NitrozenTable: VueConstructor
    const NitrozenPagination: VueConstructor
    const NitrozenRadio: VueConstructor
    const NitrozenStepper: VueConstructor
    const NitrozenToggleBtn: VueConstructor
    const NitrozenTooltip: VueConstructor
    const NitrozenCustomForm: VueConstructor

    // Directives
    const strokeBtn: DirectiveOptions
    const flatBtn: DirectiveOptions
    const clickOutside: DirectiveOptions

    export default Nitrozen
    export {
        NitrozenAutocomplete,
        NitrozenButton,
        NitrozenBadge,
        NitrozenCheckBox,
        NitrozenChips,
        NitrozenDropdown,
        NitrozenDialog,
        NitrozenError,
        NitrozenInline,
        NitrozenInput,
        NitrozenMenu,
        NitrozenMenuItem,
        NitrozenTab,
        NitrozenTabItem,
        NitrozenTable,
        NitrozenPagination,
        NitrozenRadio,
        NitrozenStepper,
        NitrozenToggleBtn,
        NitrozenTooltip,
        NitrozenCustomForm,

        strokeBtn,
        flatBtn,
        clickOutside
    }
}
