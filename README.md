# 🌊 Joy For Living – Watersports & Activities Aruba

> Taller – Unidad 2: Introducción al Front-End con React  
> Desarrollado con **Next.js 14 · JavaScript · React 18**

---

## 👤 Información del Estudiante

| Campo | Detalle |
|---|---|
| **Nombre** | [Benjamin Jair Stamper Alvarez] |
| **Programa** | [Transformacion digital de Empresas] |
| **Asignatura** | Desarrollo de aplica Nat en Cloud |
| **Unidad** | Unidad 2 – Introducción al Front-End con React |

---

## 🏢 Información de la Empresa

| Campo | Detalle |
|---|---|
| **Nombre** | Joy For Living Watersports & Activities |
| **Ubicación** | Palm Beach, Aruba — C Tower, Holiday Inn Aruba |
| **Sector** | Turismo · Actividades recreativas |
| **Modelo de negocio** | B2C – servicios directos a turistas |

### Descripción

Joy For Living es una empresa turística ubicada en Palm Beach, Aruba, especializada en delivery de sillas y sombrillas de playa, deportes acuáticos, tours de la isla y experiencias recreativas para turistas internacionales. Antes operaba solo por WhatsApp y redes sociales.

**Objetivo de digitalización:** Ofrecer una plataforma web profesional donde los clientes puedan conocer los servicios, ver precios reales, reservar la entrega de sillas/sombrillas con depósito por tarjeta, y coordinar el resto de actividades por WhatsApp.

---

## 🗺️ Servicios cubiertos por la aplicación

#### 🏖️ Delivery de Sillas y Sombrillas (servicio insignia)
- 1 sombrilla pequeña + 2 sillas de playa entregadas en el hotel/playa: **$25**
- Instalación por nuestro equipo (incluye delivery): **+$10**
- Reserva en línea con depósito de **$10 con tarjeta** (Stripe Checkout); el resto se paga al entregar

#### ⛵ Sailing & Snorkeling
- Botes: Dolphin, Sunshine, Locura ($70 adulto · $50 niño menor de 10), Jolly Pirates (ofrecido sin precio publicado)

#### 🌊 Watersports
- Tube Rides ($30/persona) · Parasailing ($70/persona)
- Jet Skis / Waverunners ($70 individual · $80 doble)
- Kayaks ($35/hora) · Paddle Board ($25/hora)

#### 🎣 Fishing
- Bottom Fishing · Deep Sea Fishing

#### 🏍️ Land Tours
- Jeep Tours · UTV Tours

---

## 💻 Sobre la Aplicación

### Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 14.2.5 | Framework React con App Router |
| **React** | 18 | Biblioteca de UI |
| **JavaScript** | ES2023 | Lenguaje de programación |
| **CSS Modules** | – | Estilos con scope local |
| **Stripe** | 16.x | Depósito con tarjeta para el delivery de sillas/sombrillas |
| **next-auth** | 4.x | Dependencia instalada para login con Google (aún no conectada) |

### Arquitectura del proyecto

```
joy-for-living/
├── src/
│   ├── app/                    # App Router de Next.js
│   │   ├── layout.js           # Layout raíz (Navbar + Footer + WhatsApp)
│   │   ├── icon.png            # Favicon (generado del logo real)
│   │   ├── page.js             # Página principal (Home)
│   │   ├── api/
│   │   │   ├── create-deposit-session/route.js  # Crea el Stripe Checkout del depósito
│   │   │   └── session-details/route.js         # Consulta el estado del pago
│   │   ├── activities/
│   │   │   └── page.js         # Catálogo completo de actividades
│   │   ├── booking/
│   │   │   ├── page.js         # Sistema de reservas
│   │   │   └── success/page.js # Confirmación tras pagar el depósito
│   │   └── contact/
│   │       └── page.js         # Página de contacto
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js       # Navegación con mobile menu y logo real
│   │   │   └── Footer.js       # Pie de página
│   │   ├── sections/
│   │   │   ├── HeroSection.js          # Hero con foto real traslúcida
│   │   │   ├── BeachRentalSection.js   # Delivery de sillas/sombrillas (servicio insignia)
│   │   │   ├── ActivitiesSection.js    # Grid de actividades con filtros y precios reales
│   │   │   ├── BoatsSection.js         # Botes de sailing & snorkeling
│   │   │   ├── AboutSection.js         # Sobre la empresa
│   │   │   ├── TestimonialsSection.js  # Testimonios
│   │   │   ├── BookingSection.js       # Reservas (delivery con depósito / actividades por WhatsApp)
│   │   │   └── ContactSection.js       # Información de contacto
│   │   └── ui/
│   │       ├── CascadeImage.js         # Foto local → foto de stock → emoji
│   │       └── WhatsAppFloat.js        # Botón flotante WhatsApp
│   ├── lib/
│   │   ├── data.js             # Datos centralizados (empresa, actividades, precios)
│   │   └── useReveal.js        # Hook personalizado para animaciones
│   └── styles/
│       └── globals.css         # Variables CSS + estilos globales
└── public/images/              # Fotos reales del negocio (ver public/images/README.md)
```

### Funcionalidades implementadas

- ✅ **Delivery de sillas y sombrillas** con depósito de $10 por tarjeta (Stripe Checkout) y respaldo por WhatsApp
- ✅ **Landing page** completa con hero traslúcido sobre foto real
- ✅ **Catálogo de actividades** con filtros por categoría y precios reales
- ✅ **Botes de sailing & snorkeling** con fotos reales
- ✅ **Formulario de reservas** con validación, selección de actividad, fecha y cálculo de precio estimado
- ✅ **Página de contacto** con cards de WhatsApp, email y ubicación
- ✅ **Navbar y footer** con el logo real de la empresa
- ✅ **Botón flotante de WhatsApp** con animación de pulso
- ✅ **Diseño 100% responsive** (mobile-first)
- ✅ **Rutas múltiples**: `/`, `/activities`, `/booking`, `/booking/success`, `/contact`
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
git clone https://github.com/stamperbenjamin7-web/joy-for-living.git

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

### Variables de entorno

Copiar `.env.example` a `.env.local` y completar:

```env
# Requerido para que el depósito con tarjeta funcione (si no se configura,
# el sitio cae automáticamente a reserva solo por WhatsApp)
STRIPE_SECRET_KEY=sk_test_tu_clave_de_stripe

# Opcional — URL pública del sitio desplegado
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Opcional — solo si se conecta el login con Google más adelante
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

---

## 🌐 Despliegue en Vercel 

### Pasos para desplegar

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Conectar repositorio de GitHub
3. Click en **"Import Project"**
4. Configurar `STRIPE_SECRET_KEY` (y `NEXT_PUBLIC_BASE_URL` con la URL final) para que el depósito con tarjeta funcione en producción
5. Click **"Deploy"**


---

## 📱 Páginas de la Aplicación

| Ruta | Descripción |
|---|---|
| `/` | Home – Hero, Delivery de sillas/sombrillas, Actividades, Botes, About, Testimonios |
| `/activities` | Catálogo completo con filtros por categoría |
| `/booking` | Reservas: delivery con depósito por tarjeta, o actividades por WhatsApp |
| `/booking/success` | Confirmación tras pagar el depósito de la reserva |
| `/contact` | Información de contacto y redes sociales |

---


