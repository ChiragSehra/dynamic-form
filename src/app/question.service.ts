import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { CheckboxQuestion } from './question-checkbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'lastName',
        label: 'Last',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'address',
        label: 'Address',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'city',
        label: 'City',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'state',
        label: 'State',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'zip',
        label: 'Zip',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'DOB',
        label: 'Date of Birth',
        type: "date",
        order: 2
      }),
	  new TextboxQuestion({
        key: 'male',
        label: 'Male',
         type: 'checkbox',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'female',
        label: 'Female',
         type: 'checkbox',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'phone',
        label: 'Phone',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'home',
        label: 'Home',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'phone',
        label: 'Phone',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'work',
        label: 'Work',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
         type: 'email',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'patientSignature',
        label: 'Patient Signature',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'legalRepresentativeName',
        label: 'Legal Representative Name',

        order: 2
      }),
	  new TextboxQuestion({
        key: 'legalRepPhone',
        label: 'Legal Rep Phone',
        order: 2
      }),
new TextboxQuestion({
        key: 'relationship',
        label: 'Relationship',
        order: 2
      }),
new TextboxQuestion({
        key: 'insuranceName',
        label: 'Insurance Name',
        order: 2
      }),
new TextboxQuestion({
        key: 'policyHolderName',
        label: 'Policyholder Name',
        order: 2
      }),
new TextboxQuestion({
        key: 'policyNumber',
        label: 'Policy #',
        order: 2
      }),
new TextboxQuestion({
        key: 'groupNumber',
        label: 'Group #',
        order: 2
      }),
new TextboxQuestion({
        key: 'insurancePhone',
        label: 'InsurancePhone',
        order: 2
      }),
new TextboxQuestion({
        key: 'policyHolderRelationship',
        label: 'Policy Holder Relationship',
        order: 2
      }),
new TextboxQuestion({
        key: 'pbmInsuranceNumber',
        label: 'PBM Insurance Number',
        order: 2
      }),
new TextboxQuestion({
        key: 'idNumber',
        label: 'ID #',
        order: 2
      }),
new CheckboxQuestion({
        key: 'patientInsured',
        label: 'PatientInsured',
        type: 'checkbox',
        order: 2
      }),
new TextboxQuestion({
        key: 'hasSecondaryInsurance',
        label: 'Has Secondary Insurance',
        order: 2
      }),
new TextboxQuestion({
        key: 'initialHere',
        label: 'Initial Here',
        order: 2
      }),
new TextboxQuestion({
        key: 'householdSize',
        label: 'Household Size',
        order: 2
      }),
new TextboxQuestion({
        key: 'householdIncome',
        label: 'Household Income',
        order: 2
      }),
new TextboxQuestion({
        key: 'prescriberFirstName',
        label: 'Prescriber First Name',
        order: 2
      }),
new TextboxQuestion({
        key: 'prescriberLastName',
        label: 'Last',
        order: 2
      }),
new TextboxQuestion({
        key: 'primaryFirstName',
        label: 'Primary First Name',
        order: 2
      }),
new CheckboxQuestion({
        key: 'nP',
        label: 'NP',
        type: 'checkbox',
        order: 2
      }),
new CheckboxQuestion({
        key: 'pA',
        label: 'PA',
        type: 'checkbox',
        order: 2
      }),
new TextboxQuestion({
        key: 'npiNumber',
        label: 'NPI Number',
        order: 2
      }),
new TextboxQuestion({
        key: 'groupNPINumber',
        label: 'Group NPI Number',
        order: 2
      }),
new TextboxQuestion({
        key: 'practiceName',
        label: 'Practice Name',
        order: 2
      }),
new TextboxQuestion({
        key: 'practiceStreetName',
        label: 'Practice Street Name',
        order: 2
      }),
new TextboxQuestion({
        key: 'practiceStreetAddress',
        label: 'Practice Street Address',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'city',
        label: 'City',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'state',
        label: 'State',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'zip',
        label: 'ZIP',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'phone',
        label: 'Phone',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'fax',
        label: 'Fax',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'stateLicenseNumber',
        label: 'State License Number',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'taxIdNumber',
        label: 'Tax ID #',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'officeContactName',
        label: 'Office Contact Name',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'phone',
        label: 'Phone',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'xDEANumber',
        label: 'XDEA #',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'office',
        label: 'Office',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'otherFacility',
        label: 'Other Facility',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'dEANumber',
        label: 'DEA #',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'shipToAddress',
        label: 'Ship To Address',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'city',
        label: 'City',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'state',
        label: 'State',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'zip',
        label: 'ZIP',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'contactName',
        label: 'Contact Name',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'phone',
        label: 'Phone',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'prescriberSignature',
        label: 'Prescriber Signature',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'date',
        label: 'Date',
		type: 'date',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'dEANumber',
        label: 'DEA #',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'F11',
        label: 'F11.XX',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'other',
        label: 'Other',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'nKDA',
        label: 'NKDA',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'knownDrugAllergies',
        label: 'Known Drug Allergies',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'concurrentMedications',
        label: 'Concurrent Medications',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'medication',
        label: 'Medication',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'doseStrength',
        label: 'Dose_Strength',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'sig',
        label: 'Quantity',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'clinicalGuidanceyes',
        label: 'Clinical Guidance(Yes)',
        type: 'checkbox',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'clinicalGuidanceno',
        label: 'Clinical Guidance(No)',
        type: 'checkbox',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'copaySupportYes',
        label: 'Copay Support(Yes)',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'copaySupportNo',
        label: 'Copay Support(No)',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'probuphineQty',
        label: 'Probuphine Qty',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'shipPriorCoverageYes',
        label: 'Ship Prior To Coverage Confirmation (Yes)',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'shipPriorCoverageNo',
        label: 'Ship Prior To Coverage Confirmation (No)',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'taxExemptYes',
        label: 'Tax Exempt (Yes)',
        order: 2
      }),
	  new CheckboxQuestion({
        key: 'taxExemptNo',
        label: 'Tax Exampt (No)',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'exemptID',
        label: 'Exempt ID',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'insertionKitQuantity',
        label: 'Insertion Kit Quantity',
        order: 2
      }),
	  new TextboxQuestion({
        key: 'removalKitQuantity',
        label: 'Removal Kit Quantity',
        order: 2
      })

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
