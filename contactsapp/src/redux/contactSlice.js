import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter()
const initialState = contactAdaptor.getInitialState()

export const contactSelectors = contactAdaptor.getSelectors((state) => state.contacts)

export const contactSlice = createSlice({
    name: 'contacts',
    reducers: {
        addContact: contactAdaptor.addOne,
        addContacts: contactAdaptor.addMany,
        deleteContact: contactAdaptor.removeOne,
        removeAllContacts: contactAdaptor.removeAll,
        updateContact: contactAdaptor.updateOne,
    },
    initialState,
})

export const { addContact, addContacts, deleteContact, removeAllContacts, updateContact } = contactSlice.actions
export default contactSlice.reducer

//Perfomance and Normalizing Data
// const userId = 'user2'
// const userObject = state.users.entities[userId]

// CRUD
// Bir varlık bağdaştırıcısının birincil içeriği, bir varlık durumu nesnesine varlık örnekleri eklemek, güncellemek ve kaldırmak için oluşturulmuş bir indirgeyici işlevler kümesidir:

// addOne: tek bir varlığı kabul eder ve halihazırda mevcut değilse onu ekler.
// addMany: şeklinde bir varlık dizisini veya nesneyi kabul eder Record<EntityId, T>ve henüz mevcut değilse bunları ekler.
// setOne: tek bir varlığı kabul eder ve onu ekler veya değiştirir
// setMany: şeklinde bir varlık dizisini veya nesneyi kabul eder Record<EntityId, T>ve bunları ekler veya değiştirir.
// setAll: şeklinde bir varlık dizisini veya nesneyi kabul eder Record<EntityId, T>ve mevcut tüm varlıkları dizideki değerlerle değiştirir.
// removeOne: tek bir varlık kimliği değerini kabul eder ve varsa bu kimliğe sahip varlığı kaldırır.
// removeMany: bir dizi varlık kimliği değerini kabul eder ve varsa bu kimliklere sahip her varlığı kaldırır.
// removeAll: varlık durumu nesnesindeki tüm varlıkları kaldırır.
// updateOne: Bir varlık kimliğini içeren bir "güncelleme nesnesini" ve bir changesalan içinde güncellenecek bir veya daha fazla yeni alan değeri içeren bir nesneyi kabul eder ve karşılık gelen varlık üzerinde yüzeysel bir güncelleme gerçekleştirir.
// updateMany: bir dizi güncelleme nesnesini kabul eder ve karşılık gelen tüm varlıklar üzerinde yüzeysel güncellemeler gerçekleştirir.
// upsertOne: tek bir varlığı kabul eder. Bu kimliğe sahip bir varlık mevcutsa, yüzeysel bir güncelleme gerçekleştirecek ve belirtilen alanlar mevcut varlıkla birleştirilecek ve eşleşen alanlar mevcut değerlerin üzerine yazılacaktır. Varlık mevcut değilse eklenecektir.
// upsertManyRecord<EntityId, T>: sığ bir şekilde yükseltilecek bir dizi varlık veya nesneyi kabul eder 