
import { BehaviorSubject } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductSliderService } from '../services/productSlider/productSlider.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  items: any = [];
  searchItems: any = [];
  isSearch!: boolean;
  isLoading!: boolean;
  text$ = new BehaviorSubject<string | null>('Initial Text');

  public folder!: string;
  public newLocation = localStorage.getItem('location') || "Select Locations";
  private activatedRoute = inject(ActivatedRoute);

  searchProducts: any = []

  constructor(private router: Router, private productSliderService: ProductSliderService,
  ) { }

  ngOnInit() {
    this.loadUI();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log(this.folder)
    this.getSlidersData();
  }

  getSlidersData() {
    this.items = this.productSliderService.productSlider();
    // this.productSliderService.productSlider().pipe(
    //   map((res: any) => {
    //     this.items = res;
    //     console.log(res);
    //   })
    // ).subscribe();
  }
  getUpdatedLocation(value: any) {
    this.newLocation = value;
  }

  seeAllButton(item: any) {
    this.router.navigateByUrl(`/home/shopByCategory/${item?.url}`, {
      state: item
    });
  }
  loadUI() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }
}
