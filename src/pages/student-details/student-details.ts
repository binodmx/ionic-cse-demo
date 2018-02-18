import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Student } from '../../data-models/Student';
import { StudentService } from '../../services/student-service';
/**
 * Generated class for the StudentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {
  public student;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.student=navParams.get('student');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsPage');
  }

}
