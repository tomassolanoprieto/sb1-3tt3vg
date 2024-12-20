export const config = {
  backend: {
    name: 'git-gateway',
    branch: 'main',
  },
  load_config_file: false,
  media_folder: 'public/images/uploads',
  public_folder: '/images/uploads',
  locale: 'es',
  collections: [
    {
      name: 'blog',
      label: 'Blog',
      folder: 'src/content/blog',
      create: true,
      slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        { label: 'Extracto', name: 'excerpt', widget: 'text' },
        { label: 'Fecha de Publicación', name: 'date', widget: 'datetime' },
        { label: 'Imagen Destacada', name: 'image', widget: 'image' },
        { 
          label: 'Categoría',
          name: 'category',
          widget: 'select',
          options: ['Mercado Inmobiliario', 'Consejos', 'Noticias', 'Tendencias', 'Inversión']
        },
        { label: 'Autor', name: 'author', widget: 'string' },
        { label: 'Contenido', name: 'body', widget: 'markdown' },
        { label: 'Tags', name: 'tags', widget: 'list', default: [] }
      ]
    },
    {
      name: 'properties',
      label: 'Propiedades',
      folder: 'src/content/properties',
      create: true,
      slug: '{{slug}}',
      fields: [
        { label: 'Título', name: 'title', widget: 'string' },
        { label: 'Descripción', name: 'description', widget: 'text' },
        { label: 'Precio', name: 'price', widget: 'number' },
        { label: 'Ubicación', name: 'location', widget: 'string' },
        { 
          label: 'Tipo',
          name: 'type',
          widget: 'select',
          options: ['venta', 'alquiler']
        },
        {
          label: 'Categoría',
          name: 'category',
          widget: 'select',
          options: ['pisos', 'casas', 'chalets', 'aticos', 'locales', 'oficinas', 'naves', 'edificios']
        },
        {
          label: 'Características',
          name: 'features',
          widget: 'object',
          fields: [
            { label: 'Habitaciones', name: 'bedrooms', widget: 'number' },
            { label: 'Baños', name: 'bathrooms', widget: 'number' },
            { label: 'Metros Cuadrados', name: 'size', widget: 'number' },
            { label: 'Parking', name: 'parking', widget: 'boolean', required: false },
            { label: 'Jardín', name: 'garden', widget: 'boolean', required: false },
            { label: 'Piscina', name: 'pool', widget: 'boolean', required: false },
            { label: 'Terraza', name: 'terrace', widget: 'boolean', required: false }
          ]
        },
        {
          label: 'Imágenes',
          name: 'images',
          widget: 'list',
          field: { label: 'Imagen', name: 'image', widget: 'image' }
        },
        { label: 'Etiquetas', name: 'tags', widget: 'list', default: [] },
        { label: 'Destacada', name: 'featured', widget: 'boolean', default: false }
      ]
    }
  ]
};