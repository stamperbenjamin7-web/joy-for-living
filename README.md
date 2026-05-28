# 🌊 Joy For Living – Watersports & Activities Aruba

> Taller – Unidad 2: Introducción al Front-End con React  
> Desarrollado con **Next.js 14 · JavaScript · React 18**

---

## 👤 Información del Estudiante

| Campo | Detalle |
|---|---|
| **Nombre** | [Tu nombre completo] |
| **Matrícula** | [Tu número de matrícula] |
| **Programa** | [Tu carrera/programa] |
| **Asignatura** | Desarrollo de aplicaciones web en React (solo Front-End) |
| **Unidad** | Unidad 2 – Introducción al Front-End con React |

---

## 🏢 Información de la Empresa

| Campo | Detalle |
|---|---|
| **Nombre** | Joy For Living Watersports & Activities |
| **Ubicación** | Oranjestad, Aruba, Antillas Neerlandesas |
| **Sector** | Turismo · Actividades recreativas |
| **Modelo de negocio** | B2C – servicios directos a turistas |

### Descripción

Joy For Living es una empresa turística ubicada en Aruba especializada en actividades acuáticas, tours de la isla, alquileres de playa y experiencias recreativas para turistas internacionales. Actualmente opera principalmente a través de WhatsApp, reservas manuales y redes sociales.

**Objetivo de digitalización:** Migrar sus procesos de reservas manuales a una plataforma web profesional que permita a los clientes conocer servicios, ver precios, contactar fácilmente y realizar reservas online.

---

## 🗺️ Mapa de Capacidades

### Capacidades Core

| Área | Descripción | Estado |
|---|---|---|
| **Gestión de Reservas** | Sistema de reservas online que reemplaza WhatsApp y hojas de cálculo | 🟡 En progreso |
| **Catálogo de Actividades** | Catálogo digital de 20+ actividades con descripciones y horarios | ✅ Implementado |
| **Comunicación con Clientes** | Multi-canal: WhatsApp, email, formulario de contacto | ✅ Implementado |

### Capacidades de Soporte

| Área | Descripción | Estado |
|---|---|---|
| **Presencia Digital** | Plataforma web profesional con SEO y consistencia de marca | ✅ Implementado |
| **Pagos Online** | Stripe, PayPal, tarjetas de crédito/débito | 📅 Planificado |
| **Autenticación** | Login con Google OAuth, perfiles, historial de reservas | 🟣 Opcional (+1 pt) |

### Servicios cubiertos por la aplicación

#### 🌊 Deportes Acuáticos
- Snorkeling (con horarios específicos: 9AM, 1PM, 4:30PM)
- Scuba Diving · Jet Ski · Parasailing
- Banana Boat · Tube Rides · Paddle Board · Kayak · Windsurf

#### 🏍️ Tours Terrestres
- UTV Tours · ATV Tours · Jeep Safari
- Bus Tours · Private Tours

#### ⛵ Tours Marítimos
- Catamaran Trips · Boat Trips
- Deep Sea Fishing · Bottom Fishing

#### 🏖️ Servicios de Playa
- Beach Chair Rental · Umbrella Rental

---

## 💻 Sobre la Aplicación

### Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 14.2.5 | Framework React con App Router |
| **React** | 18 | Biblioteca de UI |
| **JavaScript** | ES2023 | Lenguaje de programación |
| **CSS Modules** | – | Estilos con scope local |
| **next-auth** | 4.x | Autenticación Google (opcional) |

### Arquitectura del proyecto

```
joy-for-living/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.js           # Layout raíz (Navbar + Footer + WhatsApp)
│   │   ├── page.js             # Página principal (Home)
│   │   ├── activities/
│   │   │   └── page.js         # Catálogo completo de actividades
│   │   ├── booking/
│   │   │   └── page.js         # Sistema de reservas
│   │   └── contact/
│   │       └── page.js         # Página de contacto
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js       # Navegación con mobile menu
│   │   │   └── Footer.js       # Pie de página
│   │   ├── sections/
│   │   │   ├── HeroSection.js          # Sección hero animada
│   │   │   ├── AboutSection.js         # Sobre la empresa
│   │   │   ├── ActivitiesSection.js    # Grid de actividades con filtros
│   │   │   ├── SnorkelingSection.js    # Horarios de snorkeling
│   │   │   ├── TestimonialsSection.js  # Testimonios
│   │   │   ├── CapabilityMap.js        # Mapa de capacidades (Prácticum 3)
│   │   │   ├── BookingSection.js       # Formulario de reservas
│   │   │   └── ContactSection.js       # Información de contacto
│   │   └── ui/
│   │       └── WhatsAppFloat.js        # Botón flotante WhatsApp
│   ├── lib/
│   │   ├── data.js             # Datos centralizados (actividades, empresa)
│   │   └── useReveal.js        # Hook personalizado para animaciones
│   └── styles/
│       └── globals.css         # Variables CSS + estilos globales
└── public/                     # Activos estáticos
```

### Funcionalidades implementadas

- ✅ **Landing page** completa con hero animado y estadísticas
- ✅ **Catálogo de 20 actividades** con filtros por categoría (Water, Land, Sea, Beach)
- ✅ **Horarios de Snorkeling** (9AM / 1PM / 4:30PM con ubicaciones)
- ✅ **Formulario de reservas** con validación, selección de actividad, fecha y horarios
- ✅ **Mapa de capacidades** visual del Prácticum 3
- ✅ **Página de contacto** con cards de WhatsApp, email y ubicación
- ✅ **Navbar responsivo** con menú mobile
- ✅ **Botón flotante de WhatsApp** con animación de pulso
- ✅ **Diseño 100% responsive** (mobile-first)
- ✅ **Rutas múltiples**: `/`, `/activities`, `/booking`, `/contact`
- ✅ **CSS Modules** para estilos encapsulados
- ✅ **Custom hook** `useReveal` para animaciones on-scroll
- ✅ **Metadata SEO** en cada página

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18.x o superior
- npm 9.x o superior

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/[tu-usuario]/joy-for-living.git

# 2. Entrar al directorio
cd joy-for-living

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en: [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo (localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción (tras npm run build)
npm run lint     # Linter ESLint
```

### Variables de entorno (opcional – para login con Google)

Crear un archivo `.env.local` en la raíz:

```env
# Google OAuth (punto extra)
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret
NEXTAUTH_SECRET=una_cadena_secreta_aleatoria
NEXTAUTH_URL=http://localhost:3000
```

---

## 🌐 Despliegue en Vercel (punto extra)

### Pasos para desplegar

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Conectar repositorio de GitHub
3. Click en **"Import Project"**
4. Configurar variables de entorno si se usa login con Google
5. Click **"Deploy"**

### URL de la aplicación desplegada

> 🔗 **[https://joy-for-living.vercel.app](https://joy-for-living.vercel.app)**  
> *(Actualizar con la URL real tras el despliegue)*

---

## 📱 Páginas de la Aplicación

| Ruta | Descripción |
|---|---|
| `/` | Home – Hero, About, Actividades, Snorkeling, Testimonios, Mapa de Capacidades |
| `/activities` | Catálogo completo con filtros por categoría |
| `/booking` | Formulario de reservas con validación |
| `/contact` | Información de contacto y redes sociales |

---

## 🎨 Decisiones de Diseño

- **Paleta:** Azul océano profundo (`#0A7EA4`), coral vivo (`#F4623A`), arena dorada (`#F5D98B`)
- **Tipografía:** Cormorant Garamond (display serif) + Outfit (body sans-serif)
- **Tema:** Dark mode con estética "tropical-luxe editorial"
- **Animaciones:** CSS animations en hero, CSS transitions en cards, IntersectionObserver para reveal on-scroll
- **Responsive:** Mobile-first con CSS Modules y media queries

---

## 📋 Checklist del Taller

- [x] Proyecto en Next.js con JavaScript
- [x] Subido a repositorio GitHub
- [x] README con info del estudiante y empresa
- [x] Mapa de capacidades incluido
- [x] Rutas múltiples (páginas)
- [x] Formulario de reservas funcional
- [x] Componentes React reutilizables
- [x] Diseño responsive
- [ ] Login con Google *(opcional +1 pt)*
- [ ] Despliegue en Vercel *(opcional +1 pt)*

---

*Desarrollado para el Taller de la Unidad 2 – Introducción al Front-End con React*
