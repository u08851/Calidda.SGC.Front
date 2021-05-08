import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-commitment',
  templateUrl: './detail-commitment.component.html',
  styleUrls: ['./detail-commitment.component.scss']
})
export class DetailCommitmentComponent implements OnInit {
  products: any[];
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  productNames: string[] = [
    "Bamboo Watch",
    "Black Watch",
    "Blue Band",
    "Blue T-Shirt",
    "Bracelet",
    "Brown Purse",
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set",
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.products = data;
  }

}


interface Product {
  id?: string;
  acta?: string;
  dataCreation?: string;
  horaCreation?: string;
  status?: string;
}


const data = [
  {
    "id": "1000",
    "acta": "Acata 1",
    "dataCreation": "20/11/2020",
    "horaCreation": "4:00 pm",
    "status": "En Proceso",
    "orders": [
      {
        "id": "1000",
        "compromiso": "Entrega de Equipos",
        "anterior": "45%",
        "actual": '50%',
        "fechaCierre": '20/11/2020',
      },
      {
        "id": "2000",
        "compromiso": "Investigar costos de atención",
        "anterior": "45%",
        "actual": '50%',
        "fechaCierre": '20/11/2020',
        "orders": [
          {
            "id": "1000",
            "subTarea": "f230fh0g3",
            "daresponsable": "2020-09-13",
            "avance": "65%",
          },
        ]
      }
    ]
  },
  {
    "id": "2000",
    "acta": "Acata 1",
    "dataCreation": "20/11/2020",
    "horaCreation": "4:00 pm",
    "status": "En Proceso",
    "orders": [
      {
        "id": "1000",
        "compromiso": "f230fh0g3",
        "anterior": "2020-09-13",
        "actual": 65,
        "fechaCierre": 1,
      },
      {
        "id": "2000",
        "compromiso": "f230fh0g3",
        "anterior": "2020-09-13",
        "actual": 65,
        "fechaCierre": 1,
        "orders": [
          {
            "id": "1000",
            "subTarea": "f230fh0g3",
            "daresponsable": "2020-09-13",
            "avance": "75%",
          },
        ]
      }
    ]
  }
]