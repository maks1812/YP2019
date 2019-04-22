Array.prototype.remove = function(from, to) {
  let rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

const storage = (function() {
  const data = [
    {
      id: '1',
      description: 'Madrid',
      createdAt: new Date().toLocaleDateString(),
      author: 'Fyodor Dostoevsky',
      photoLink: 'https://mywowo.net/media/images/cache/Madrid_jpg_640_336_cover_70.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '2',
      description: 'Barcelona',
      createdAt: new Date().toLocaleDateString(),
      author: 'Dante Alighieri',
      photoLink: 'https://www.tourprom.ru/site_media/images/upload/2016/11/8/resortimage/barselona.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '3',
      description: 'Valencia',
      createdAt: new Date().toLocaleDateString(),
      author: ' Leo Tolstoy',
      photoLink: 'https://img.pac.ru/resorts/213117/185199/big/4FB66A207F00010127FB4A1CBF957B01.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '4',
      description: 'Sevilla',
      createdAt: new Date().toLocaleDateString(),
      author: 'Victor Hugo',
      photoLink: 'http://selfguide.ru/wp-content/uploads/2012/10/Seville.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '5',
      description: 'Zaragoza',
      createdAt: new Date().toLocaleDateString(),
      author: 'William Shakespeare',
      photoLink: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Zaragoza_-_Bas%C3%ADlica_del_Pilar_y_r%C3%ADo_Ebro.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '6',
      description: 'Málaga',
      createdAt: new Date().toLocaleDateString(),
      author: 'Johann Wolfgang von Goethe',
      photoLink: 'https://s-ec.bstatic.com/images/hotel/max1024x768/847/84757310.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '7',
      description: 'Murcia',
      createdAt: new Date().toLocaleDateString(),
      author: 'Miguel de Cervantes y Saavedra',
      photoLink: 'http://www.inkacars.com/wp-content/uploads/2013/01/Murcia-Cathedral-AlquilerCochesAeropuertos.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '8',
      description: 'Palma',
      createdAt: new Date().toLocaleDateString(),
      author: ' Italo Calvino',
      photoLink: 'https://ssl.tzoo-img.com/images/tzoo.98833.0.729642.PalmaMallorca.jpg?width=412&spr=3',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '9',
      description: 'Las Palmas de Gran Canaria',
      createdAt: new Date().toLocaleDateString(),
      author: ' Stendhal',
      photoLink: 'http://www.grancanaria.com/turismo/fileadmin/user_upload/_imported/GranCanaria_lpgc.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '10',
      description: 'Bilbao',
      createdAt: new Date().toLocaleDateString(),
      author: 'Charles Baudelaire',
      photoLink: 'https://a1.r9cdn.net/rimg/dimg/d7/6d/bf09ef37-city-22202-164d2243c9c.jpg?width=399&height=264',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '11',
      description: 'Alicante',
      createdAt: new Date().toLocaleDateString(),
      author: 'Marcel Proust',
      photoLink: 'https://via.placeholder.com/400x500/ffffff',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '12',
      description: 'Córdoba',
      createdAt: new Date().toLocaleDateString(),
      author: 'Giovanni Boccaccio',
      photoLink: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/erasmus-experience-cordoba-spain-chris-14d90123c3eb1cfb7124a747e18c951f.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '13',
      description: 'Valladolid',
      createdAt: new Date().toLocaleDateString(),
      author: 'Alexander Pushkin',
      photoLink: 'https://www.spain.info/export/sites/spaininfo/comun/carrusel-recursos/castilla-leon/Plaza-Mayor-valladolid-c.jpg_369272544.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '14',
      description: 'Vigo',
      createdAt: new Date().toLocaleDateString(),
      author: ' Franz Kafka',
      photoLink: 'https://static.vueling.com/cms/media/186412/vigo_thumb_408.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '15',
      description: 'Gijón',
      createdAt: new Date().toLocaleDateString(),
      author: 'Anton Chekhov',
      photoLink: 'https://www.bungalowsclub.com/info/wp-content/uploads/2014/06/04429_Gijon.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '16',
      description: 'L’Hospitalet de Llobregat',
      createdAt: new Date().toLocaleDateString(),
      author: 'Umberto Eco',
      photoLink: 'https://tropki.ru/sites/default/files/styles/large/public/previews/9566/las-palmas-de-gran-kanariya.jpg?itok=vLoQmWAf',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '17',
      description: 'La Coruña',
      createdAt: new Date().toLocaleDateString(),
      author: 'Gabriel García Márquez',
      photoLink: 'https://www.cruisemapper.com/images/ports/564-a5246fa8f54a.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '18',
      description: 'Granada',
      createdAt: new Date().toLocaleDateString(),
      author: 'J.R.R. Tolkien',
      photoLink: 'https://cdn2.veltra.com/ptr/20180516071807_274932714_2627_0.jpg?imwidth=550&impolicy=custom',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '19',
      description: 'Vitoria',
      createdAt: new Date().toLocaleDateString(),
      author: ' William Faulkner',
      photoLink: 'https://previews.123rf.com/images/ververidis/ververidis1801/ververidis180100509/93828308-vitoria-spain-january-12-2018-virgen-blanca-square-in-vitoria-vitoria-gasteiz-is-the-capital-of-the-.jpg',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    },
    {
      id: '20',
      description: 'Elche',
      createdAt: new Date().toLocaleDateString(),
      author: 'Aesop',
      photoLink: 'https://www.researchgate.net/profile/Shri_Jain/publication/269806593/figure/fig5/AS:295107854127113@1447370603623/Elche-Spain-traditional-palm-grove-now-a-World-Heritage-Site-Photo-iStockphoto.png',
      hashTags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
    }
  ];

  return {
    getPhotoPost: function(id) {
      for (let i = 0; i < data.length; i += 1) {
        if (id + '' === data[i].id) return data[i];
      }
    },

    validatePhotoPost: function(photoPost) {
      if (!photoPost.hasOwnProperty('description')
        || !photoPost.hasOwnProperty('createdAt')
        || !photoPost.hasOwnProperty('author')
        || !photoPost.hasOwnProperty('photoLink')
        || !photoPost.hasOwnProperty('id')
        || !photoPost.hasOwnProperty('hashTags')
        ) return false;
      
      if (typeof photoPost.description !== 'string'
        || typeof photoPost.author !== 'string'
        || typeof photoPost.photoLink !== 'string'
        || typeof photoPost.createdAt !== 'string'
        || typeof photoPost.id !== 'string'
        || !Array.isArray(photoPost.hashTags)
      ) return false;

      return true;
    },

    addPhotoPost: function(photoPost) {
      if (!this.validatePhotoPost(photoPost)) return false;

      data.push(photoPost);

      return true;
    },

    editPhotoPost: function(photoPost) {
      if (!photoPost.hasOwnProperty('id')) return false;

      let i = 0;
      for (; i < data.length; i += 1) {
        if (data[i].id === photoPost.id) break;
      }

      if (i === data.length) return false;
    
      if (photoPost.hasOwnProperty('description')) {
        if (typeof photoPost.description !== 'string') return false;
        data[i].description = photoPost.description;
      }
      if (photoPost.hasOwnProperty('photoLink')) {
        if (typeof photoPost.photoLink !== 'string') return false;
        data[i].photoLink = photoPost.photoLink;
      }
      if (photoPost.hasOwnProperty('hashTags')) {
        if (!Array.isArray(photoPost.hashTags)) return false;
        data[i].hashTags = photoPost.hashTags;
      }

      return true;
    },

    removePhotoPost: function(id) {
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].id === id) {
          data.remove(i);
          return true;
        }
      }

      return false;
    },

    getPhotoPosts: function(config, skip = 0, top = 10) {
      function sorter(obj1, obj2) {
        return new Date(obj1.createdAt).getTime() - new Date(obj2.createdAt).getTime();
      }

      let author = config.author || '',
          hashTag = config.hashTag || '',
          result = [];
      author = author.toLowerCase();
      
      if (!author && !hashTag) {
        return data.slice(skip, top)
                   .sort(sorter);
      }

      for (let i = skip; i < top; i += 1) {
        if (author && !hashTag) {
          if (data[i].author.toLocaleLowerCase() === author) result.push(data[i]);
        } else if (!author && hashTag) {
          if (data[i].hashTags.includes(hashTag)) result.push(data[i]);
        } else {
          if (data[i].hashTags.includes(hashTag) && data[i].author.toLowerCase() === author) result.push(data[i]);
        }
      }

      return result.sort(sorter);
    }
  }
})();

console.log(storage.getPhotoPosts({}));
console.log(storage.getPhotoPost('1'));
console.log(storage.removePhotoPost('1'));
console.log(storage.getPhotoPosts({}));

