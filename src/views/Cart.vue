<template>
    <div>
        <Master>
            <div style="background-color: #f4f4f4;">
                <div class="container-fluid" style="padding: 50px 50px">
                    <h6>Gio hang({{GET_CART.length}} san pham)</h6>
                    <div class="row">
                        <div class="col-md-9 p-2" style="background-color: #ffffff;margin-right: 8px;max-width: 73%; !important">
                            <a href="#" class="taga">Vue-ecommerce ></a>
                            <div v-for="(item, index) in GET_CART" :key="item.id" class="row p-3">
                            <div class="col-md-2">
                                <img src="furn.-master/imgs/d.jpg" alt="" class="w-100">
                            </div>
                            <div class="col-md-6" style="align-items: center;">
                                <p style="font-size: 14px;">{{item.title}}</p>
                                <div class="custom-align"></div>
                                <a href="" style="font-size: 14px;" @click="removeItem(index)">Xóa</a>&emsp;
                            </div>
                            <div class="col-md-4">
                                <div class=" row">
                                    <div class="col-md-6">
                                        <h5 class="price">{{item.price}}$</h5>
                                        <p class="in-price">
                                        <del style="font-size: 12px;color: rgb(162, 162, 162);">799.000đ</del> | <span>-74%</span>
                                        </p>

                                    </div>
                                    <div class="col-md-6 mt-2">
                                        <span v-if="item.qty>1" class="min" @click="decrementQty(item.id)"><button type="button">-</button></span>
                                        <span v-else class="min"><button type="button" disabled>-</button></span>
                                        <input type="tel" class="text-center inp" :value="item.qty">
                                        <span class="max" @click="incrementQty(item.id)"><button type="button">+</button></span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-3 p-4" style="background-color: #ffffff;margin-left: 7px;">
                            <div style="display: flex;justify-content:space-between;" class="w-100">
                            <h5 class="kmai">Mã Khuyến Mãi</h5>
                            <p class="mby">Có thể chọn 2</p>
                            </div>
                            <div class="both-two"><a href="#">Chọn hoặc nhập Khuyến mãi</a></div>
                            <div class="row mt-4">
                            <div class="col-md-6">Tạm tính
                            </div>
                            <div class="col-md-6">
                                {{CART_TOTAL}} $
                            </div>
                            </div>
                            <hr>
                            <div class="row">
                            <div class="col-md-6">Thành tiền</div>
                            <div class="col-md-6">{{CART_TOTAL}} $</div>
                            </div>
                            <div class="row" style="justify-content: center;">
                            <button class="btn btn-danger mt-4">Tiến hành đặt hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    </div>
</template>

<script>
import Master from './Master.vue'
import {DECREMENT_QTY, GET_CART, INCREMENT_QTY, CART_TOTAL, REMOVE_ITEM} from '../constants/mutation-type'
import {mapGetters} from 'vuex'
export default {
  components: { Master },
  methods: {
      incrementQty(id) {
          this.$store.commit(INCREMENT_QTY, id);
      },
      decrementQty(id) {
          this.$store.commit(DECREMENT_QTY, id);
      },
      removeItem(index){
          this.$store.commit(REMOVE_ITEM, index);
      } 
  },
  computed: {
      ...mapGetters({
          GET_CART,
          CART_TOTAL
      })
  },
  created() {
  },
}
</script>

<style>
.taga {
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    padding: 14px 0px 10px 20px;
    cursor: pointer;
    color: rgb(36, 36, 36);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    text-decoration: none;
}

.taga:hover {
    text-decoration: none;
    color: rgb(36, 36, 36);
}

.custom-align {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.in-price {
    font-size: 12px;
    margin-bottom: 8px;
    color: rgb(162, 162, 162)
}

.price {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 500;
    display: inline-block;
}

.inp {
    width: 25px;
    border: 1px solid #e0e0e0;
}

.min {
    background-color: rgb(248, 248, 248);
    padding: 5px 15px;
    cursor: pointer;
}

.max {
    background-color: rgb(248, 248, 248);
    padding: 5px 13px;
    cursor: pointer;
}

.kmai {
    color: rgb(36, 36, 36);
    margin: 0px 0px 8px;
    text-transform: capitalize;
    font-size: 14px;
    line-height: 20px;
}

.mby {
    font-size: 13px;
    color: rgb(120, 120, 120);
    line-height: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
}

.both-two {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
}

.both-two>a {
    color: rgb(13, 92, 182);
    font-size: 14px;
    font-weight: normal;
    line-height: 1.43;
    font-weight: 600;
}
</style>