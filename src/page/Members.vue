<template>
  <Navbar />
  <section
    class="bg-slate-100 transition duration-100 ease-in-out"
  >
    <div class="container pt-24">
      <h1>Members/<b>Kelas</b></h1>
      <div class="">
        <div class="grid grid-cols-3 gap-4 pt-4">
          <CardComponents :members="{ nama: 'Agung Pratama', ig:'agungpratama200105',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Aldi Kurniawan', ig:'_aldikrniawn',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Dela Prilisia Yulidistira', ig:'delaprilisia',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Desy Sabrina', ig:'myproo_ob',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Dwi Datirah', ig:'iira_only_',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Evelina', ig:'evelinsss_',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Farhan Mulyaputra', ig:'xyprhnn_',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Firman Darmawan', ig:'',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Fito', ig:'fitoch7',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Iman Kurniawan', ig:'iman.kurniawan__',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Kornelius Niko E.', ig:'korneliusniko.e',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'M. Triagus Rudiansyah', ig:'triagus999'}"/>
          <CardComponents :members="{ nama: 'Muhammad Akbar Al Zikra', ig:'akbaralzikra',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Mohammad Syafii Syaputra', ig:'5y4fii',foto:'https://avatars.githubusercontent.com/u/93257718?v=4'}"/>
          <CardComponents :members="{ nama: 'Mohd. Ikhsan Sadillah', ig:'_m_ikhsan_s_'}"/>
          <CardComponents :members="{ nama: 'Muh. Rizkal Setiawan', ig:'muh.rizkallsetiawan'}"/>
          <CardComponents :members="{ nama: 'M. Dimas Yudi Pratama', ig:'dimasyudi_07'}"/>
          <CardComponents :members="{ nama: 'Muhammad Dwi Ramdan', ig:''}"/>
          <CardComponents :members="{ nama: 'M. Fadillah Atha Wardana', ig:'fadillathw._'}"/>
          <CardComponents :members="{ nama: 'Muhammad Farhan Zalwa', ig:'mhdfarhan_4'}"/>
          <CardComponents :members="{ nama: 'Muhammad Ilham', ig:''}"/>
          <CardComponents :members="{ nama: 'Muhammad Sofian', ig:'mhd_sofian__'}"/>
          <CardComponents :members="{ nama: 'Raihan Naufal Yanda', ig:'raihannaufallyanda'}"/>
          <CardComponents :members="{ nama: 'Regi Wiyanda', ig:'regiwynd2'}"/>
          <CardComponents :members="{ nama: 'Rendi', ig:'rendi_dimor'}"/>
          <CardComponents :members="{ nama: 'Romy Andrian', ig:'romyadrn_'}"/>
          <CardComponents :members="{ nama: 'Shalwat Nabila Arrafi', ig:'elfi_andrew_78'}"/>
          <CardComponents :members="{ nama: 'Teddy Ramadhan', ig:'tdy_ramadhan'}"/>
          <CardComponents :members="{ nama: 'Tinta Thania Nadhilah Putri', ig:'tinthnia'}"/>
          <CardComponents :members="{ nama: 'Wahyu', ig:'binaramerta._'}"/>
          <CardComponents :members="{ nama: 'Yoga Dwi Pujakusuma', ig:'yoga_dpk'}"/>
          <CardComponents :members="{ nama: 'Yurisha Anindya', ig:'yurisha_anindya'}"/>
          <CardComponents :members="{ nama: 'Zhea Aulia', ig:'zheaulis'}"/>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponents from '../components/CardComponents.vue';
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar,CardComponents },
};
</script>

<style></style>
