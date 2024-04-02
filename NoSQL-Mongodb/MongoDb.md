MongoDB Cheat Sheet  
Tüm Veri Tabanını Göster

```js
show dbs
```

Mevcut Veri Tabanını Göster

```js
db;
```

Veri Tabanı Oluştur veya Değiştir

```js
use acme
```

Mevcut Veri Tabanını Sil

```js
db.dropDatabase();
```

Yeni Tablo Oluştur

```js
db.createCollection("posts");
```

Veri Tabanındaki Tabloları Göster

```js
show collections
```

Veri Ekle

```js
db.posts.insert({
  title: "Post One",
  body: "Body of post one",
  category: "News",
  tags: ["news", "events"],
  user: {
    name: "John Doe",
    status: "author",
  },
  date: Date(),
});
```

Birden Fazla Veri Ekle

```js
db.posts.insertMany([
  {
    title: "Post Two",
    body: "Body of post two",
    category: "Technology",
    date: Date(),
  },
  {
    title: "Post Three",
    body: "Body of post three",
    category: "News",
    date: Date(),
  },
  {
    title: "Post Four",
    body: "Body of post three",
    category: "Entertainment",
    date: Date(),
  },
]);
```

Tüm Verileri Getir

```js
db.posts.find();
```

Tüm Verileri Düzenli Halde Getir

```js
db.posts.find().pretty();
```

Verileri Bul

```js
db.posts.find({ category: "News" });
```

Verileri Sırala

# asc

```js
db.posts.find().sort({ title: 1 }).pretty();
```

# desc

```js
db.posts.find().sort({ title: -1 }).pretty()
Verileri Say
db.posts.find().count()
db.posts.find({ category: 'news' }).count()
Verileri Sınırla
db.posts.find().limit(2).pretty()
Chaining
db.posts.find().limit(2).sort({ title: 1 }).pretty()
Foreach
db.posts.find().forEach(function(doc) {
print("Blog Post: " + doc.title)
})
```

Bir Tane Veri Bul

```js
db.posts.findOne({ category: "News" });
```

Belirli Alanları Bul

```js
db.posts.find(
  { title: "Post One" },
  {
    title: 1,
    author: 1,
  }
);
```

Satırları Güncelle

```js
db.posts.update(
  { title: "Post Two" },
  {
    title: "Post Two",
    body: "New body for post 2",
    date: Date(),
  },
  {
    upsert: true,
  }
);
```

Belirli Alanı Güncelle

```js
db.posts.update({ title: 'Post Two' },
{
$set: {
    body: 'Body for post 2',
    category: 'Technology'
  }
})
Alanı Arttırma ($inc)
db.posts.update({ title: 'Post Two' },
{
$inc: {
    likes: 5
  }
})
```

Alanı Yeniden Adlandır

```js
db.posts.update(
  { title: "Post Two" },
  {
    $rename: {
      likes: "views",
    },
  }
);
```

Satırı Sil

```js
db.posts.remove({ title: "Post Four" });
```

Alt Belgeler

```js
db.posts.update(
  { title: "Post One" },
  {
    $set: {
      comments: [
        {
          body: "Comment One",
          user: "Mary Williams",
          date: Date(),
        },
        {
          body: "Comment Two",
          user: "Harry White",
          date: Date(),
        },
      ],
    },
  }
);
```

Dizideki Öğeye Göre Bul ($elemMatch)

```js
db.posts.find({
  comments: {
    $elemMatch: {
      user: "Mary Williams",
    },
  },
});
```

Index Ekle

```js
db.posts.createIndex({ title: "text" });
```

Metin Ara

```js
db.posts.find({
  $text: {
    $search: '"Post O"',
  },
});
```

Büyük veya Küçük

````js
db.posts.find({ views: { $gt: 2 } })
db.posts.find({ views: { $gte: 7 } })
db.posts.find({ views: { $lt: 7 } })
db.posts.find({ views: { $lte: 7 } })
```js
````
