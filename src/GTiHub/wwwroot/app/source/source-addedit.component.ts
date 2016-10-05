import { Component, ViewChild, OnInit } from '@angular/core';
import { Source, SourceField } from './source';
import { DataService } from '../services/dataService';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Response, Headers } from '@angular/http';

@Component({
    selector: 'source-addedit',
    templateUrl: 'app/source/source-addedit.component.html',
    providers: [DataService],
})
export class SourceAddEditComponent implements OnInit {
    //Control the template / manual header boxes
    sopt: boolean = true;
    //Reset the form
    active = true;

    //Used for editing source
    editing = false;
    private editId = -1;

    //Source Field count from number picker
    sfieldCount: number;
    //Store the actual number of source fields - comparison purposes
    sourceFieldsCount: number = 0;
    private sources: Source[] = [];
    private addEditSource: Source = new Source('', '', '', true, null);
    public uploader: FileUploader;

    public sourceFields: SourceField[] = [];
    private sFieldSeqNumCount: number = 1;
    private options = [
        { value: 'url', display: 'URL' },
        { value: 'text', display: 'Text' },
        { value: 'bool', display: 'Boolean' },
        { value: 'decimal', display: 'Decimal' },
        { value: 'currency', display: 'Currency' },
        { value: 'email', display: 'Email' }
    ];


    constructor(private _dataService: DataService) {
        this.uploader = new FileUploader({ url: 'api/File/ExtractHeaders' });
        this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: any) => {
            var res = JSON.parse(response);
            this.setSourceFields(res);
        };
    }

    //------------------------------------------------------------------------------------------------------------------------  

    onSubmit() {
        if (this.editing) {
            this._dataService.Update('Sources', this.editId, this.addEditSource).subscribe(client => { },
                error => console.log(error));
        }
        else {
            this.addEditSource.sourceFields = this.sourceFields;
            this._dataService.Add('Sources', this.addEditSource).subscribe((source) => {
                this.sources.push(source);
                this.sourceFields = null;
            },
                error => console.log(error));
        }

        this.newSource();
        this.editing = false;
        return false;
    }
    

    getSources() {
        this._dataService.GetAll('Sources').subscribe(sources => this.sources = sources);
    }

    newSource() {
        this.addEditSource = new Source('', '', '', true, null);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    //---------------------------------------------------------------------------------------------------------------------------
    //Source Field functions

    onFieldCountChange(newVal: number): void {
        if (this.sfieldCount > this.sourceFieldsCount) {
            this.addSourceFields(this.sfieldCount - this.sourceFieldsCount);
        }
        else if (this.sfieldCount < this.sourceFieldsCount) {
            this.removeSourceFields(this.sourceFieldsCount - this.sfieldCount);
        }
        else { // Do Nothing 
        }
    }

    addSourceFields(addCount: number) {
        var newSourceField;
        for (var i = 0; i < addCount; i++) {
            newSourceField = new SourceField('N/A', 'text', true, this.sFieldSeqNumCount++);
            this.sourceFields.push(newSourceField);
        }
        this.sourceFieldsCount = this.sourceFields.length;
    }

    //Mass removal for use with number picker
    removeSourceFields(removeCount: number) {
        this.sourceFields = this.sourceFields.splice(0, this.sourceFields.length - removeCount);
        this.sFieldSeqNumCount -= removeCount;
    }

    //Targeted removal
    removeSourceField(sourceField, i) {
        this.sourceFields = this.sourceFields.filter(function (el) {
            return el != sourceField;
        });
        //Update sequence numbers of all sourceFields with seq num greater than the deleted one
        for (var j = i, len = this.sourceFields.length; j < len; j++) {
            this.sourceFields[j].seqNum--;
        }
        this.sFieldSeqNumCount--;
    }

    setSourceFields(sfields: SourceField[]) {
        this.sourceFields = sfields;
    }

    //----------------------------------------------------------------------------------------------------------------------------

    ngOnInit(): void {
        this.getSources();
    }
}