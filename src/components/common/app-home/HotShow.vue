<template>
<div class="hot-wraper">
    <div class="title">热门演出</div>
    <ul class="hotshow-list clearfix">
        <!-- slides -->
        <li>
            <hot-show-item class="list-item" v-for="(item,i) in hotshow" :key='i' @click="goToDetail" :item='item'>
            </hot-show-item>
        </li>
    </ul>
    <router-link :to='{name:"show"}' class="show-all">
        查看全部演出 &nbsp;&nbsp;<i class="fa fa-angle-right"></i>
    </router-link>
</div>
</template>

<style lang="scss">
.hot-wraper {
    width: 9.666667rem;
    padding: .266667rem 0 0 .333333rem;
    background: #fff;

    .title {
        font-size: .48rem;
        color: #1a1a1a;
        margin-bottom: .333333rem;
        position: relative;
        font-weight: bold;
    }

    .list-item {
        width: 3rem;
        height: 5.493333rem;
        float: left;
        margin-right: .133333rem;

        .poster-box {
            border-radius: .133333rem;
            overflow: hidden;
            height: 3.906667rem;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .poster-desc {
            .poster-name {
                color: #1a1a1a;
                padding: 0 0.17067rem;
                font-size: .373333rem;
                font-weight: bold;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: nowrap
            }

            .poster-time {
                font-size: .32rem;
                color: #b3b3b3;
                padding: .106667rem 1.066667rem .106667rem .106667rem;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: nowrap;
                line-height: 0.59733rem;
                position: relative;

                .poster-address {
                    display: inline-block;
                    position: absolute;
                    right: 0.17067rem;
                    max-width: 1.70667rem;
                    overflow: hidden;
                    word-break: break-all;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }

    .hotshow-list::after,
    .hotshow-list::before {
        display: block;
        content: '';
        width: 0;
        clear: both;
    }

    .show-all {
        width: 3.173333rem;
        height: .773333rem;
        text-align: center;
        line-height: .773333rem;
        font-size: .32rem;
        margin: .4rem 3.4rem .2rem;
        background: #FFF;
        border-radius: 0.17067rem;
        border: 1px solid #e6e6e6;
    }
}
</style>

<script>
import axios from "axios"
import qs from 'qs'
import HotShowItem from '@components/common/app-home/HotShowItem.vue'
export default {
    data() {
        return {
            hotshow: [],

        };
    },
    async created() {
        let result = await this.$http({
            method: "post",
            url: "/jz/index/hotsShowList",
            data: qs.stringify({
                city_id: 0
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            loading: true
        })
        this.hotshow = result.data;
    },
    methods: {
        goToDetail() {
            this.$router.push({
                name: 'detail',
                params: {
                    info: this.info
                }
            })
        }
    },
    components: {
        HotShowItem
    }
};
</script>
