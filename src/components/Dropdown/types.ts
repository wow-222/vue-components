import { PropType } from 'vue'
import type { VNode } from 'vue'
import type { Placement, Options } from '@popperjs/core'

export const DropdownProps = {
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  trigger: {
    type: String as PropType<'hover' | 'click'>,
    default: 'hover'
  },
  transition: {
    type: String,
    default: 'fade'
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  popperOptions: {
    type: Object as PropType<Options>
  },
  menuOptions: {
    type: Array as PropType<MenuOption[]>,
    required: true
  },
  hideAfterClick: {
    type: Boolean,
    default: true
  },
  manual: {
    type: Boolean
  }
}

export interface MenuOption {
  label: string | VNode
  key: string | number
  disabled?: boolean
  divided?: boolean
}
