import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {

  profilForm: FormGroup
  firstname: string

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private dataProvider: DataProvider) {
    this.getFirstname()
    this.initForm()
  }

  initForm() {
    this.firstname = this.dataProvider.firstname
    this.profilForm = this.formBuilder.group({
      firstname: [this.firstname]
    });
  }

  async getFirstname(){
    await this.dataProvider.getFirstname()
  }

  async save() {
    console.log(this.profilForm.controls.firstname.value)
    await this.dataProvider.setFirstname(this.profilForm.controls.firstname.value)
    await this.dataProvider.getFirstname()
    this.initForm()
  }

}


