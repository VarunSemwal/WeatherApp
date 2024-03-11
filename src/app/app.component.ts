import { Component,OnInit,inject } from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {WeatherData} from '../models/weatherData';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SkyIdModule } from '@skyux/core';
import { SkyDatepickerModule } from '@skyux/datetime';
import { SkyInputBoxModule } from '@skyux/forms';
import {
  SkyHelpInlineModule,
  SkyStatusIndicatorModule,
} from '@skyux/indicators';
import { SkyFluidGridModule } from '@skyux/layout';
import { SkyValidators } from '@skyux/validation';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  protected latitude = new FormControl('', [Validators.required]);
  protected longitude = new FormControl('', Validators.required);
  protected formGroup: FormGroup<{
    latitude: FormControl<string | null>;
    longitude: FormControl<string | null>;
  }> ;
  
  weatherData: WeatherData | undefined;
  
  constructor(private weatherService: WeatherService) {
    this.formGroup = inject(FormBuilder).group({
      latitude: this.latitude,
      longitude: this.longitude,
      
    });
   }

  ngOnInit(): void {
    //this.getWeather();
  }

  getWeather() {
    if (this.formGroup.valid) {
      this.weatherService.getWeather(this.formGroup.value.latitude, this.formGroup.value.longitude).subscribe(data => {
        this.weatherData = data;
      });
    } else {
      // Form is invalid, display error messages or handle it accordingly
      return;
    }
    
  }

  protected longitudeDetails(): void {
    alert('This is the longitude of your location!');
  }
  protected latitudeDetails(): void {
    alert('This is the latitude of your location!');
  }

}
