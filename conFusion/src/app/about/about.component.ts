import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/Leader';

import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  leaders: Leader[];

  selectedLeader : Leader;
  
  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders);
  }

  onSelect(leader:Leader){
    this.selectedLeader = leader;
  }

}
