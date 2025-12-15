import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  imports: [],
  templateUrl: './friends.html',
  styleUrl: './friends.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Friends {

}
