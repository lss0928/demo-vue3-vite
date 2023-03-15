<template>
    <button
        :class="[
            $options.name,
            `${$options.name}--${type}`,
            size && `${$options.name}--${size}`,
            circle && `${$options.name}--circle`
        ]"
        v-bind="$attrs"
    >
        <slot></slot>
        <i v-if="icon" :class="['el-icon', icon]"></i>
    </button>
</template>

<script>
    export default {
        name: 'vite-button',
        props: {
            type: {
                type: String,
                defaule: 'primary'
            },
            size: {
                type: String,
                defaule: ''
            },
            circle: {
                type: Boolean
            },
            icon: {}
        }
    };
</script>

<style lang="less" scoped>
    .type(@type) {
        border-color: @type;
        color: @type;
        background: rgba(@type, 0.1);
    }
    // 映射
    .size() {
        big: @button__padding--big;
        small: @button__padding--small;
    }
    .vite-button {
        border: 1px solid @primary;
        border-radius: @radius;
        padding: @button__padding;
        &--big {
            padding: .size[big];
        }
        &--small {
            padding: .size[small];
        }

        &--primary {
            .type(@primary);
        }
        &--info {
            .type(@info);
        }
        &--success {
            .type(@success);
        }
        &--warning {
            .type(@warning);
        }
        & + .vite-button {
            margin-left: 10px;
        }
        &--circle {
            border-radius: 100%;
            width: 30px;
            height: 30px;
            padding: 0;
        }
    }
</style>
>
