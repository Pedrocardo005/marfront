import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswerComponent } from '@features/support/components/question-answer/question-answer.component';
import { SupportMessage } from '@features/support/models/SupportMessage.models';
import { SupportService } from '@features/support/services/support.service';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { SearchBarComponent } from '@shared/components/search-bar/search-bar.component';
import { AccordionModule } from 'primeng/accordion';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { Toast } from 'primeng/toast';
import { ContactItemComponent } from '../../components/contact-item/contact-item.component';

interface Option {
  text: string;
  value: number;
}

interface ContactItem {
  text: string;
  urlImage: string;
  urlAlt: string;
  urlSkip: string;
}

interface Question {
  title: string;
  text: string;
}

@Component({
  selector: 'app-support',
  imports: [
    SearchBarComponent,
    TranslocoModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    ButtonModule,
    ContactItemComponent,
    QuestionAnswerComponent,
    AccordionModule,
    Toast,
  ],
  templateUrl: './support.component.html',
  styleUrl: './support.component.css',
  providers: [MessageService],
})
export class SupportComponent implements OnInit {
  options: Option[] | undefined;
  contactItems: ContactItem[] | undefined;
  questions: Question[] | undefined;

  optionSelected: Option | undefined;

  email: string | undefined;

  text: string | undefined;

  supportMessage: SupportMessage | undefined;

  constructor(
    private supportService: SupportService,
    private translocoService: TranslocoService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.options = [
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.ONE-TEXT',
        value: 1,
      },
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.TWO-TEXT',
        value: 2,
      },
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.THREE-TEXT',
        value: 3,
      },
      {
        text: 'FEATURES.SUPPORT.MAIN-BAR.SELECT.OPTIONS.FOUR-TEXT',
        value: 4,
      },
    ];

    this.optionSelected = this.options[0];

    this.contactItems = [
      {
        text: 'Whatsapp',
        urlImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png',
        urlAlt: 'Figura whatsapp',
        urlSkip: 'http://www.whatsapp.com',
      },
      {
        text: 'Facebook',
        urlImage:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkLcBrDHgOj0B_qrNTygXlcjOPlRfGOBqZrw&s',
        urlAlt: 'Figura facebook',
        urlSkip: 'http://www.facebook.com',
      },
      {
        text: 'Skype',
        urlImage: 'https://cdn-icons-png.flaticon.com/256/3128/3128338.png',
        urlAlt: 'Figura skype',
        urlSkip: 'http://www.skype.com',
      },
    ];

    this.questions = [
      {
        title: 'FEATURES.SUPPORT.MAIN-BAR.BOTTOM.QUESTION-ONE.TITLE',
        text: 'FEATURES.SUPPORT.MAIN-BAR.BOTTOM.QUESTION-ONE.TEXT',
      },
      {
        title: 'FEATURES.SUPPORT.MAIN-BAR.BOTTOM.QUESTION-TWO.TITLE',
        text: 'FEATURES.SUPPORT.MAIN-BAR.BOTTOM.QUESTION-TWO.TEXT',
      },
      {
        title: 'FEATURES.SUPPORT.MAIN-BAR.BOTTOM.QUESTION-THREE.TITLE',
        text: 'FEATURES.SUPPORT.MAIN-BAR.BOTTOM.QUESTION-THREE.TEXT',
      },
    ];
  }

  sendSupportMessage() {
    const self = this;
    this.supportMessage = {
      assunto: this.translocoService.translateObject(
        this.optionSelected?.text || ''
      ),
      email: this.email || '',
      mensagem: this.text || '',
    };

    this.supportService
      .sendSupportMessage(this.supportMessage)
      .pipe()
      .subscribe({
        next: () => {
          self.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Mensagem enviada com sucesso!',
          });
        },
        error: (err) => {
          self.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: `Erro ao enviar sua mensagem.
              \n ${JSON.stringify(err.error)}`,
          });
        },
      });
  }
}
