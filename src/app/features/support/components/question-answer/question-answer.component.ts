import { Component, Input } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-question-answer',
  imports: [AccordionModule, TranslocoModule],
  templateUrl: './question-answer.component.html',
  styleUrl: './question-answer.component.css',
})
export class QuestionAnswerComponent {
  @Input() title: string | undefined;
  @Input() text: string | undefined;
}
