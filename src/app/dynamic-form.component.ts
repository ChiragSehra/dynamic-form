import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import * as pdf2json from 'node_modules/pdf2json';
// import { createReadStream } from 'node_modules/fs';
/// <reference path="/src/node.d.ts" />

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  public fs = require('node_modules/fs');
  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  pdfConversion(){

    let fs = require('fs'),
    PDFParser = require("pdf2json");

    let pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (errData: { parserError: any; }) => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", (_pdfData: any) => {
        this.fs.writeFile("../assets/Titan.json", JSON.stringify(pdfParser.getAllFieldsTypes()));
    });

    pdfParser.loadPDF("../assets/TitanFillabelForm.pdf");
}
}
