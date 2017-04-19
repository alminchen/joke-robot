<template>
    <div class="ux-city-select">
        <div class="ux-city-select-content">
            <mt-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></mt-picker>
            <p class="ux-city-select-content-text">切换为：{{addressProvince}}--{{addressCity}}市</p>
            <div @touchend="select" class="ux-city-select-but">切换城市</div>
            <div @touchend="noSelect" class="ux-city-select-but no-select">取消切换</div>
        </div>
    </div>
</template>

<script>
    import {CITY} from '../common/constant/constant';
    import {Picker} from 'mint-ui';
    export default {
        name: 'citySelect',
        data (){
            return {
                addressSlots: [
                    {
                        flex: 1,
                        values: Object.keys(CITY),
                        className: 'slot1',
                        textAlign: 'center'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['北京'],
                        className: 'slot3',
                        textAlign: 'center'
                    }
                ],
                addressProvince: '北京',
                addressCity: '北京'
            }
        },
        components: {
            Picker
        },
        created (){
        },
        methods:{
            select(){
                this.$emit('select', {selectCity: this.addressCity})
            },
            noSelect(){
                this.$emit('noselect', {})
            },
            onAddressChange(picker, values) {
                picker.setSlotValues(1, CITY[values[0]]);
                this.addressProvince = values[0];
                this.addressCity = values[1];
            }
        }
    }
</script>
<style lang="scss">
@import "../assets/scss/min.scss";
    .ux-city-select {
        width: 100%;
        height: 100%;
        background-color: rgba(10,10,10,0.55);
        position: fixed;
        top: 0;
        bottom: 0;
        .ux-city-select-content {
            height: 100%;
            width: 100%;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            border-top: 1px solid #999;
            .picker {
                margin-top: px2rem(150);
                height: px2rem(470);
                overflow:hidden;
                .picker-item {
                    color: #c8d0d9;
                }
                .picker-selected {
                    color: #0843f6;
                }
            }
            .ux-city-select-content-text {
                margin-top: px2rem(60);
                text-align: center;
                color: #18bba8;
                font-size: 20px;
            }
        }
        .ux-city-select-but {
            background-color: #254891;
            border: 1px solid #ddd;
            border-radius: 10px;
            height: px2rem(96);
            line-height: px2rem(96);
            width: 80%;
            text-align: center;
            font-size: 22px;
            color: #fff;
            margin: px2rem(100) auto 0;
            z-index: 11111
        }
        .no-select {
            background-color: rgba(37, 72, 145, 0.4);
        }
    }
.picker {
  overflow: hidden;
}
.picker-toolbar {
  height: 40px;
}
.picker-items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  padding: 0;
  text-align: right;
  font-size: 24px;
  position: relative;
}
.picker-center-highlight {
  height: 36px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  width: 100%;
  top: 50%;
  margin-top: -18px;
  pointer-events: none
}
.picker-center-highlight:before, .picker-center-highlight:after {
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: #eaeaea;
  display: block;
  z-index: 15;
  -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
}
.picker-center-highlight:before {
  left: 0;
  top: 0;
  bottom: auto;
  right: auto;
}
.picker-center-highlight:after {
  left: 0;
  bottom: 0;
  right: auto;
  top: auto;
}

.picker-slot {
  font-size: 18px;
  overflow: hidden;
  position: relative;
  max-height: 100%
}
.picker-slot.picker-slot-left {
  text-align: left;
}
.picker-slot.picker-slot-center {
  text-align: center;
}
.picker-slot.picker-slot-right {
  text-align: right;
}
.picker-slot.picker-slot-divider {
  color: #000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center
}
.picker-slot-wrapper {
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
.picker-slot-wrapper.dragging, .picker-slot-wrapper.dragging .picker-item {
  -webkit-transition-duration: 0s;
          transition-duration: 0s;
}
.picker-item {
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #707274;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  -webkit-transition-duration: .3s;
          transition-duration: .3s;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
.picker-slot-absolute .picker-item {
  position: absolute;
}
.picker-item.picker-item-far {
  pointer-events: none
}
.picker-item.picker-selected {
  color: #000;
  -webkit-transform: translate3d(0, 0, 0) rotateX(0);
          transform: translate3d(0, 0, 0) rotateX(0);
}
.picker-3d .picker-items {
  overflow: hidden;
  -webkit-perspective: 700px;
          perspective: 700px;
}
.picker-3d .picker-item, .picker-3d .picker-slot, .picker-3d .picker-slot-wrapper {
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d
}
.picker-3d .picker-slot {
  overflow: visible
}
.picker-3d .picker-item {
  -webkit-transform-origin: center center;
          transform-origin: center center;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition-timing-function: ease-out;
          transition-timing-function: ease-out
}

</style>
