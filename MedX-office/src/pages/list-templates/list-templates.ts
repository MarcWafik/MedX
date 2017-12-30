import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListTemplatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-templates',
  templateUrl: 'list-templates.html',
})
export class ListTemplatesPage {

  public templateTests : Array<{
    name : any ,
    descr : any,
    users : number,
    fav : boolean,
  }>; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.templateTests = [{
      name :  "CBC",
      descr :  " Complete Blood Count",
      users :  11266,
      fav :    true
    },
    {
      name :  "Fibrinogen",
      descr :  "An important contributor to blood clotting",
      users :  9054,
      fav :    true
    }, 
    {
      name :  "H A1C",
      descr :  "measures blood sugar control over the last two to three months",
      users :  7648,
      fav :    true
    }, 
    {
      name :  " DHEA",
      descr :  "Dehydroepiandrosterone a hormone produced by the adrenal glands, is a precursor to the sex hormones estrogen and testosterone",
      users :  5996,
      fav :    true
    }, 
    {
      name :  " TSH",
      descr :  " thyroid stimulating hormone (TSH) controls thyroid hormone secretion in the thyroid",
      users :  2364,
      fav :    false
    },
  ]
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListTemplatesPage');
  }
  openPage(){
    console.log("Opened");
  }
}
