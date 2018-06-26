import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Order } from '../../models/order';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private toastCtrl: ToastController) {
    this.getOrders()
  }

  async getOrders(){
    await this.dataProvider.getOrders()
  }

  async deleteOrder(orderid){
    try{
      await this.dataProvider.deleteOrder(orderid)
      this.getOrders()
      this.presentToast("commande supprimée")
    }
    catch(e){
      this.presentToast("Il y a eu une erreur")
      console.log(e)
    }

  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
    });

    toast.present()
  } 
}
