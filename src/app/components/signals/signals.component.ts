import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class SignalsComponent implements OnInit {
  constructor() {}

  quantity = signal(1);
  quantityAvailable = signal([1, 2, 3, 4, 5]);
  qtyEff = effect(() => console.log('latest QTY ', this.quantity()));

  // vehicle detils
  selectedVehicle = signal<Vehicle>({ id: 1, name: 'Vitz', price: 46000 });
  vehicles = signal<Vehicle[]>([]);
  exPrice = computed(() => this.selectedVehicle().price * this.quantity());

  ngOnInit() {
    this.quantity.update((qty) => qty * 2);
  }
  onQuantitySelected(qty: number) {
    this.quantity.set(qty);
  }
}

export interface Vehicle {
  id: number;
  name: string;
  price: number;
}
