import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { supabase } from '../../supabase.client';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton // Agrega IonButton si usas <ion-button>
  ]
})
export class UploadPage {
  userEmail: string | null = null;
  mensaje: string = '';

  constructor() {
    supabase.auth.getUser().then(({ data }) => {
      this.userEmail = data.user?.email ?? null;
    });
  }

  async onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (!file || !this.userEmail) return;

  const fileName = `private/${this.userEmail}-Walter-Cobacango`;

  const { error } = await supabase.storage
    .from('walter')
    .upload(fileName, file, { upsert: true });

  if (error) {
    this.mensaje = 'Error al subir archivo: ' + error.message;
  } else {
    this.mensaje = `${this.userEmail} subió un archivo`;
  }
}
}