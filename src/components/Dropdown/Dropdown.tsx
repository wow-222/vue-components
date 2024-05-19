import { Fragment, PropType, defineComponent, ref } from 'vue'
import { DropdownProps, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'

const MenuItem = defineComponent({
  name: 'MenuItem',
  props: {
    item: {
      type: Object as PropType<MenuOption>,
      required: true
    }
  },
  emits: ['click'],
  setup(props, ctx) {
    const { item } = props
    return () => (
      <Fragment>
        {item.divided ? <li role='separator' class='divided-placeholder' /> : ''}
        <li
          class={{ 'vk-dropdown__item': true, 'is-disabled': item.disabled, 'is-divided': item.divided }}
          id={`dropdown-item-${item.key}`}
          onClick={() => ctx.emit('click', item)}>
          {item.label}
        </li>
      </Fragment>
    )
  }
})

const Dropdown = defineComponent({
  name: 'VkDropdown',
  props: DropdownProps,
  emits: ['visible-change', 'select'],
  setup(props, ctx) {
    const { slots, emit, expose } = ctx

    const tooltipRef = ref<InstanceType<typeof Tooltip> | null>(null)

    // 实例下暴露公共属性
    expose({
      showToolTip: () => tooltipRef.value?.show(),
      hideToolTip: () => tooltipRef.value?.hide()
    })

    const itemClick = (e: MenuOption) => {
      if (e.disabled) {
        return
      }
      // 派发自定义事件select
      emit('select', e)
      if (props.hideAfterClick) {
        tooltipRef.value?.hide()
      }
    }
    const visibleChange = (e: boolean) => {
      // 派发自定义事件visible-change
      emit('visible-change', e)
    }

    return () => (
      <div class='vk-dropdown'>
        <Tooltip
          trigger={props.trigger}
          placement={props.placement}
          popperOptions={props.popperOptions}
          openDelay={props.openDelay}
          closeDelay={props.closeDelay}
          manual={props.manual}
          ref={tooltipRef}
          onVisibleChange={visibleChange}>
          {{
            default: () => slots.default && slots.default(),
            content: () => (
              <ul class='vk-dropdown__menu'>
                {props.menuOptions?.map(item => <MenuItem key={item.key} item={item} onClick={itemClick} />)}
              </ul>
            )
          }}
        </Tooltip>
      </div>
    )
  }
})

export default Dropdown
