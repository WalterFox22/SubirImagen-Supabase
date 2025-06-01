# File-SupaBase

Proyecto de ejemplo para subir archivos a Supabase Storage. 

Creado por **Walter Cobacango**.

## Descripción

Esta aplicación permite a los usuarios autenticados subir archivos a un bucket privado en Supabase Storage. El nombre del archivo subido incluye el correo del usuario autenticado para identificarlo fácilmente.



## Instalación

1. **Clona el repositorio y entra en la carpeta:**
   ```bash
   git clone <URL_DEL_REPO>
   cd File-SupaBase
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura Supabase:**
   - Crea un proyecto en [Supabase](https://app.supabase.com/).
   - Ve a la sección "Storage" y crea un bucket (puedes colocar el nombre que prefieras, recuerda usar ese nombre en el código).
   - Ve a "Project Settings" > "API" y copia la URL y la API Key (anon/public).

4. **Configura las credenciales en el proyecto:**
   - Abre el archivo de configuración de Supabase en el proyecto.
   - Coloca tu URL y Key:
     ```ts
     const supabaseUrl = 'TU_SUPABASE_URL';
     const supabaseKey = 'TU_SUPABASE_ANON_KEY';
     ```

5. **Configura las reglas del bucket en Supabase:**
   - Ve a "Storage" > tu bucket > "Policies".
   - Crea una política para permitir que los usuarios autenticados suban archivos solo a su carpeta privada:
     ```sql
     -- Permitir a los usuarios autenticados subir archivos a su propia carpeta
     CREATE POLICY "Allow any authenticated user to upload bucket"
      ON storage.objects
      FOR INSERT
      TO authenticated 
      WITH CHECK (
        bucket_id = 'name'
      );
     ```
   - **Nota:** Ajusta la política según tu estructura de carpetas y necesidades de privacidad.

## Uso

1. **Inicia la app en modo desarrollo:**
   
   ```bash
   ionic serve
   ```

2. **Autenticación:**
   - Asegúrate de que el usuario esté autenticado antes de subir archivos.

3. **Subida de archivos:**
   - Selecciona un archivo y súbelo. El archivo se guardará en el bucket bajo la ruta `private/<email>-archivo`.

## Evidencias

![image](https://github.com/user-attachments/assets/ef4918e0-3801-4572-81ee-5ad42f25c98d)


![image](https://github.com/user-attachments/assets/80d2a9b3-e466-4eb9-ae06-ae83ea22bfd9)


![image](https://github.com/user-attachments/assets/678649bf-b383-4a0d-b200-15d6ccf80272)


---

**Desarrollado con [Ionic](https://ionicframework.com/) + [Angular](https://angular.io/) + [Supabase](https://supabase.com/).**
