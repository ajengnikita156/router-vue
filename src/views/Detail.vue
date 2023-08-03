<template>
    <center>
    <h1>Detail {{ detail.nama }}</h1>
    <img :src="getImgSrc(detail.img)" alt="Category Image" style="width: 300px;" />
    <h3>Harga : {{ detail.harga }}</h3>
    <h4 style="font-style: italic;">Keterangan detail : {{ detail.keterangan }}</h4>
  </center>
  </template>
  <script>
  import { produk } from '@/assets/Produk'
  export default {
    props: [
        "id_produk"
    ],
    setup(props)
    {
      const getImgSrc = (imgFileName) => {
          return '../src/assets/img/' + imgFileName + '';
         }
        const detail = produk["produk"].find(function (item) {
            return item.id == props.id_produk;
        });
        return {
            detail,
            getImgSrc
        }
    }
  }
  </script>