import { JitEvaluator } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AssociateInfo } from '../associate-info/associate-info';
import { AssociateDetailService } from './associate-detail.service';
import { AssociateDetail } from './associateDetail';

@Component({
  selector: 'app-associate-detail',
  templateUrl: './associate-detail.component.html',
  styleUrls: ['./associate-detail.component.scss'],
})
export class AssociateDetailComponent implements OnInit {
  isDetailpage: boolean = false;
  isSkillPage: boolean = false;
  associateInfo: AssociateInfo = new AssociateInfo('', '', '', '', '');
  associateDetail: AssociateDetail = new AssociateDetail(
    '',
    '',
    '',
    '',
    '',
    '',
    new Date(),
    '',
    '',
    '',
    '',
    '',
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    0,
    0,
    0,
    '',
    '',
    0,
    '',
    '',
    '',
    '',
    new Date(),
    new Date(),
    '',
    '',
    '',
    ''
  );
  DetailForm: FormGroup;
  skillForm: FormGroup[];
  selectedIndex = 0;
  public skills = [
    { id: 1, value: 'java' },
    { id: 2, value: 'angular' },
    { id: 3, value: 'react' },
    { id: 4, value: 'microservices' },
  ];
  public billtypes = [
    { id: 1, value: 'Time & Money' },
    { id: 2, value: 'Fixed Price' },
  ];
  public rates = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
  ];
  constructor(
    private associateDetailService: AssociateDetailService,
    private fb: FormBuilder
  ) {
    this.DetailForm = this.fb.group({
      engagementName: new FormControl('', Validators.required),
      majorFunction: new FormControl('', Validators.required),
      band: new FormControl('', Validators.required),
      emailClient: new FormControl('', Validators.required),
      xid: new FormControl('', Validators.required),
      clientManager: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      billType: new FormControl('', Validators.required),
      billCode: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      asOnDate: new FormControl('', Validators.required),
      clientExpDate: new FormControl('', Validators.required),
      itExpDate: new FormControl('', Validators.required),
      ibmDate: new FormControl('', Validators.required),
      experienceWithPru: new FormControl('', Validators.required),
      careerExperience: new FormControl('', Validators.required),
      experienceWithIbm: new FormControl('', Validators.required),
      resourceCriticality: new FormControl('', Validators.required),
      atImmigrationVisaRisks: new FormControl('', Validators.required),
      backupSuccessorResource: new FormControl('', Validators.required),
      keyContingencyGroup: new FormControl('', Validators.required),
      additionalContingency: new FormControl('', Validators.required),
      visaType: new FormControl('', Validators.required),
      workPermitValidUntil: new FormControl('', Validators.required),
      extensionUpdates: new FormControl('', Validators.required),
      visaMaxOutDate: new FormControl('', Validators.required),
      timeLeftInUs: new FormControl('', Validators.required),
      visaNominations: new FormControl('', Validators.required),
      riskMitigationComments: new FormControl('', Validators.required),
      planInCaseOfExtensionAmendmentRejection: new FormControl(
        '',
        Validators.required
      ),
    });

    this.skillForm = [
      this.fb.group({
        skillName: new FormControl('', Validators.required),
        skillRating: new FormControl('', Validators.required),
      }),
    ];
  }

  ngOnInit(): void {}

  addAssociateInfo(event: AssociateInfo) {
    if (event.name) {
      this.associateInfo = event;
      this.isDetailpage = true;
      this.selectedIndex = 1;
    }
  }
  updateAssociateDetail() {
    console.log('updateAssociate Details', this.DetailForm.valid);
    if (this.DetailForm.valid) {
      this.associateDetail.associateInfo = this.associateInfo;
      this.associateDetail = this.DetailForm.value;
      this.selectedIndex = 2;
      this.isSkillPage = true;
    }
  }

  addNewSkillForm() {
    this.skillForm.push(
      this.fb.group({
        skillName: new FormControl('', Validators.required),
        skillRating: new FormControl('', Validators.required),
      })
    );
  }

  saveAssociateCompleteDetail() {
    let i = 0;
    this.associateDetail.skill = [];
    this.skillForm.forEach((skill) => {
      if (skill.invalid) {
        i++;
      } else {
        this.associateDetail.skill.push(skill.value);
      }
    });
    if (i == 0) {
      this.associateDetailService
        .submitAssociateData(this.associateDetail)
        .subscribe((data) => {
          console.log('response is');
        });
    }
  }
}