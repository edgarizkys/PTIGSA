<template>
  <transition name="portal-fade">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-[99990] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6 overflow-y-auto"
      @click.self="closeModal"
    >
      
      <!-- MAIN MODAL DIALOG CONTAINER -->
      <div class="bg-[#0A0F1D] text-white w-full max-w-6xl rounded-3xl shadow-2xl border-2 border-slate-800 overflow-hidden my-auto flex flex-col max-h-[95vh] relative">
        
        <!-- MODAL TOP BAR WITH CLOSE BUTTON -->
        <div class="bg-slate-950 border-b border-slate-800 p-4 sm:p-5 flex items-center justify-between shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-xl bg-[#00E5FF] p-1 flex items-center justify-center border border-slate-950">
              <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
            </div>
            <div>
              <span class="text-[9px] font-mono text-[#00E5FF] uppercase font-bold tracking-widest block">PORTAL KORPORAT INTERNAL</span>
              <h3 class="text-sm sm:text-base font-black font-outfit text-white uppercase">DASHBOARD PENERBITAN SO, DO & SPH PT BJA</h3>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-[10px] font-mono text-slate-400 hidden sm:inline-block">Tekan ESC atau klik tombol untuk menutup</span>
            <button 
              @click="closeModal" 
              class="px-3.5 py-2 bg-slate-800 hover:bg-red-600 text-white text-xs font-black rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow"
            >
              <span>TUTUP PORTAL</span>
              <span class="text-sm font-bold">✕</span>
            </button>
          </div>
        </div>

        <!-- MODAL BODY CONTENT (SCROLLABLE) -->
        <div class="p-4 sm:p-8 overflow-y-auto space-y-6">
          
          <!-- VIEW 1: LOGIN FORM STATE (WHEN NOT LOGGED IN) -->
          <div v-if="!isLoggedIn" class="max-w-xl mx-auto py-8">
            <div class="petrova-card-dark border-2 border-slate-800 bg-slate-950 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              
              <div class="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                <div class="w-10 h-10 rounded-xl bg-[#00E5FF] p-1 flex items-center justify-center border border-slate-950">
                  <img src="/bja_logo.png" alt="BJA Logo" class="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 class="text-lg font-black font-outfit text-white uppercase">OTENTIKASI INTERNAL PT BJA</h3>
                  <p class="text-[10px] font-mono text-slate-400">Masukan kredensial operator untuk membuka dashboard</p>
                </div>
              </div>

              <form @submit.prevent="handleLogin" class="space-y-4">
                <div>
                  <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Email Operator ID</label>
                  <input 
                    v-model="loginEmail" 
                    type="email" 
                    required
                    class="w-full bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-[#00E5FF] transition-all"
                    placeholder="admin@berkahjasaabadi.co.id"
                  />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5 font-outfit">Access Password Key</label>
                  <input 
                    v-model="loginPassword" 
                    type="password" 
                    required
                    class="w-full bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-[#00E5FF] transition-all"
                    placeholder="••••••••"
                  />
                </div>

                <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400">
                  🔒 <span class="text-white font-bold">Otorisasi Sesi Internal:</span> Masukkan Email Operator ID & Access Key resmi untuk membuka dashboard.
                </div>

                <button 
                  type="submit" 
                  class="w-full py-3.5 px-6 rounded-xl bg-[#00E5FF] hover:bg-[#00b8cc] text-slate-950 font-black text-xs uppercase tracking-wider font-outfit transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>MASUK DASHBOARD PENERBITAN DOKUMEN</span>
                  <span>→</span>
                </button>
              </form>

            </div>
          </div>

          <!-- VIEW 2: LOGGED IN DASHBOARD STATE -->
          <div v-else class="space-y-6">
            
            <!-- Operator Control Header Bar -->
            <div class="bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-lg">
                  👤
                </div>
                <div>
                  <span class="text-[9px] font-mono text-[#00E5FF] uppercase font-bold tracking-widest block">OPERATOR AKTIF</span>
                  <h4 class="text-sm font-black font-outfit text-white uppercase">ADMINISTRATOR PENERBITAN DOKUMEN PT BJA</h4>
                </div>
              </div>

              <div class="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span class="text-[10px] font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                  {{ currentDateStr }}
                </span>
                <button 
                  @click="handleLogout" 
                  class="px-3.5 py-1.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-black uppercase font-outfit hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                >
                  Keluar Sesi 🔒
                </button>
              </div>
            </div>

            <!-- TAB NAVIGATION FOR DOCUMENT TYPE (SPH / SO / DO) -->
            <div class="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto">
              <button 
                @click="activeDocType = 'sph'"
                class="px-4 py-2 rounded-xl text-xs font-black font-outfit uppercase tracking-wider transition-all border flex items-center gap-2 cursor-pointer whitespace-nowrap"
                :class="activeDocType === 'sph' ? 'bg-[#00E5FF] text-slate-950 border-[#00E5FF] shadow-lg' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'"
              >
                <span>📄</span>
                <span>01. SURAT PENAWARAN HARGA (SPH)</span>
              </button>

              <button 
                @click="activeDocType = 'so'"
                class="px-4 py-2 rounded-xl text-xs font-black font-outfit uppercase tracking-wider transition-all border flex items-center gap-2 cursor-pointer whitespace-nowrap"
                :class="activeDocType === 'so' ? 'bg-[#00E5FF] text-slate-950 border-[#00E5FF] shadow-lg' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'"
              >
                <span>📦</span>
                <span>02. SALES ORDER (SO)</span>
              </button>

              <button 
                @click="activeDocType = 'do'"
                class="px-4 py-2 rounded-xl text-xs font-black font-outfit uppercase tracking-wider transition-all border flex items-center gap-2 cursor-pointer whitespace-nowrap"
                :class="activeDocType === 'do' ? 'bg-[#F97316] text-white border-[#F97316] shadow-lg' : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'"
              >
                <span>🚚</span>
                <span>03. DELIVERY ORDER (DO / SURAT JALAN)</span>
              </button>
            </div>

            <!-- FORM INPUT PANEL BASED ON ACTIVE DOC TYPE -->
            <div class="petrova-card-dark border-2 border-slate-800 bg-slate-950 p-5 sm:p-7 rounded-3xl shadow-2xl">
              
              <div class="mb-5 pb-3 border-b border-slate-800 flex justify-between items-center">
                <div>
                  <span class="text-[9px] font-mono text-[#00E5FF] font-bold uppercase tracking-widest block mb-0.5">FORM INPUT OTOMATIS</span>
                  <h3 class="text-base sm:text-lg font-black font-outfit uppercase text-white">
                    {{ activeDocType === 'sph' ? 'FORM PENERBITAN SURAT PENAWARAN HARGA (SPH)' : activeDocType === 'so' ? 'FORM PENERBITAN SALES ORDER (SO)' : 'FORM PENERBITAN DELIVERY ORDER (DO / SURAT JALAN)' }}
                  </h3>
                </div>
                <button 
                  @click="resetActiveForm" 
                  class="text-[10px] font-mono text-slate-400 hover:text-white bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg cursor-pointer"
                >
                  Reset Form ↺
                </button>
              </div>

              <!-- FORM 1: SURAT PENAWARAN HARGA (SPH) -->
              <form v-if="activeDocType === 'sph'" @submit.prevent="generateDocument" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Nomor SPH</label>
                  <input v-model="formSph.docNo" type="text" required class="form-input" placeholder="004/SPH/BAJA-CJL/IX/2026" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Kota & Tanggal Surat</label>
                  <input v-model="formSph.cityAndDate" type="text" required class="form-input" placeholder="Cilegon, 05 September 2026" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Perihal (HAL)</label>
                  <input v-model="formSph.subject" type="text" required class="form-input" placeholder="Penawaran Harga bunker cilegon" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">UP / PIC Pembeli</label>
                  <input v-model="formSph.clientPic" type="text" placeholder="Mr. Rhanom" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Nama Perusahaan Pembeli</label>
                  <input v-model="formSph.clientName" type="text" placeholder="PT. CJ Logistic" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Departemen Pembeli</label>
                  <input v-model="formSph.clientDept" type="text" placeholder="Dept. Procurement" required class="form-input" />
                </div>

                <div class="md:col-span-2">
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Spesifikasi Produk</label>
                  <input v-model="formSph.productSpec" type="text" required class="form-input" placeholder="Bio Solar Industri Spesifikasi Ditjend Migas / PT. Pertamina (Persero)" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Periode Penawaran</label>
                  <input v-model="formSph.period" type="text" placeholder="01 - 15 September 2026" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Harga COD (Rp / Liter)</label>
                  <input v-model.number="formSph.priceCod" type="number" step="50" placeholder="17200" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Harga Tempo 14 Hari (Rp / Liter)</label>
                  <input v-model.number="formSph.priceTempo14" type="number" step="50" placeholder="18700" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Harga Tempo 30 Hari (Rp / Liter)</label>
                  <input v-model.number="formSph.priceTempo30" type="number" step="50" placeholder="20850" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Nama Penandatangan (Direksi)</label>
                  <input v-model="formSph.signatoryName" type="text" placeholder="Isolurroja H" required class="form-input" />
                </div>

                <div class="md:col-span-2 lg:col-span-3 pt-3">
                  <button type="submit" class="w-full py-3.5 rounded-2xl bg-[#00E5FF] hover:bg-[#00b8cc] text-slate-950 font-black text-xs uppercase tracking-wider font-outfit transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2">
                    <span>TERBITKAN PRATINJAU DOKUMEN SPH (PENAWARAN HARGA)</span>
                    <span>🖨️</span>
                  </button>
                </div>
              </form>

              <!-- FORM 2: SALES ORDER (SO) -->
              <form v-if="activeDocType === 'so'" @submit.prevent="generateDocument" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Nomor Sales Order (SO)</label>
                  <input v-model="formSo.docNo" type="text" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Ref. Penawaran / PO Klien</label>
                  <input v-model="formSo.refNo" type="text" placeholder="PO/2026/088-PTISU" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Tanggal Order</label>
                  <input v-model="formSo.docDate" type="date" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Nama Perusahaan Pembeli</label>
                  <input v-model="formSo.buyerName" type="text" placeholder="PT. Energi Manunggal Sejahtera" required class="form-input" />
                </div>

                <div class="md:col-span-2">
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Alamat Tagihan (Billing Address)</label>
                  <input v-model="formSo.billingAddress" type="text" placeholder="Gedung Cyber 2 Lt. 15, Kuningan, Jakarta Selatan" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Produk Terpesan</label>
                  <input v-model="formSo.productName" type="text" placeholder="BBM Industri B50 Biofuel Grade A" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Volume Pesanan (Liter)</label>
                  <input v-model.number="formSo.volume" type="number" step="1000" placeholder="32000" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Harga Satuan (Rp / Liter)</label>
                  <input v-model.number="formSo.unitPrice" type="number" step="50" placeholder="13850" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Rekening Pembayaran Bank PT BJA</label>
                  <select v-model="formSo.bankAccount" class="form-input">
                    <option value="Bank Mandiri - 1370008892110 (PT Berkah Jasa Abadi)">Bank Mandiri (1370008892110)</option>
                    <option value="Bank BCA - 0883921100 (PT Berkah Jasa Abadi)">Bank BCA (0883921100)</option>
                    <option value="Bank BNI - 0219883910 (PT Berkah Jasa Abadi)">Bank BNI (0219883910)</option>
                  </select>
                </div>

                <div class="md:col-span-2 lg:col-span-3 pt-3">
                  <button type="submit" class="w-full py-3.5 rounded-2xl bg-[#00E5FF] hover:bg-[#00b8cc] text-slate-950 font-black text-xs uppercase tracking-wider font-outfit transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2">
                    <span>TERBITKAN PRATINJAU DOKUMEN SALES ORDER (SO)</span>
                    <span>📦</span>
                  </button>
                </div>
              </form>

              <!-- FORM 3: DELIVERY ORDER (DO / SURAT JALAN) -->
              <form v-if="activeDocType === 'do'" @submit.prevent="generateDocument" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Nomor Delivery Order (DO)</label>
                  <input v-model="formDo.docNo" type="text" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Ref. Sales Order (SO)</label>
                  <input v-model="formDo.refSoNo" type="text" placeholder="BJA/SO/2026/09/008" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Tanggal Pengiriman</label>
                  <input v-model="formDo.docDate" type="date" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Penerima Barang (Consignee)</label>
                  <input v-model="formDo.consigneeName" type="text" placeholder="PT. Semen Industri Cilegon" required class="form-input" />
                </div>

                <div class="md:col-span-2">
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Lokasi Serah / Titik Koordinat STS</label>
                  <input v-model="formDo.deliveryLocation" type="text" placeholder="Depo Pabrik Bojonegara / Perairan Anchorage Priok A-2" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Nama Supir / Kapten Kapal</label>
                  <input v-model="formDo.driverName" type="text" placeholder="Sdr. Rahmat Supriadi (Driver)" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">No. Plat Tangki / Nama Kapal Tanker</label>
                  <input v-model="formDo.vehicleNo" type="text" placeholder="B 9812 UFX (Tangki 16 KL) / MT Petrova Fleet 03" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Volume Netto Terkirim (Liter)</label>
                  <input v-model.number="formDo.volume" type="number" step="500" placeholder="16000" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">No. Segel Botol Sampel & Manhole</label>
                  <input v-model="formDo.sealNo" type="text" placeholder="BJA-SEAL-88910 A/B" required class="form-input" />
                </div>

                <div>
                  <label class="block text-[10px] font-black uppercase text-slate-400 mb-1 font-outfit">Hasil Uji Berat Jenis (Density)</label>
                  <input v-model="formDo.densityTest" type="text" placeholder="0.852 kg/L @ 15°C (Lolos Uji)" required class="form-input" />
                </div>

                <div class="md:col-span-2 lg:col-span-3 pt-3">
                  <button type="submit" class="w-full py-3.5 rounded-2xl bg-[#F97316] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider font-outfit transition-all shadow-xl cursor-pointer flex items-center justify-center gap-2">
                    <span>TERBITKAN SURAT JALAN / DELIVERY ORDER (DO)</span>
                    <span>🚚</span>
                  </button>
                </div>
              </form>

            </div>

            <!-- RIWAYAT DOKUMEN YANG BARU DITERBITKAN -->
            <div v-if="generatedHistory.length > 0" class="petrova-card-dark border-2 border-slate-800 bg-slate-950 p-5 rounded-3xl">
              <div class="flex justify-between items-center mb-3 border-b border-slate-800 pb-2.5">
                <h4 class="text-xs font-black font-outfit text-white uppercase">RIWAYAT DOKUMEN DITERBITKAN SESI INI ({{ generatedHistory.length }})</h4>
                <span class="text-[9px] font-mono text-[#00E5FF]">READY TO RE-PRINT</span>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs font-mono">
                  <thead>
                    <tr class="bg-slate-900 text-slate-400 uppercase text-[9px] font-bold border-b border-slate-800">
                      <th class="py-2 px-3">TIPE</th>
                      <th class="py-2 px-3">NO. DOKUMEN</th>
                      <th class="py-2 px-3">TANGGAL</th>
                      <th class="py-2 px-3">KLIEN / PENERIMA</th>
                      <th class="py-2 px-3 text-right">TOTAL / VOLUME</th>
                      <th class="py-2 px-3 text-center">AKSI</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-800">
                    <tr v-for="(item, idx) in generatedHistory" :key="idx" class="hover:bg-slate-900/50">
                      <td class="py-2.5 px-3">
                        <span class="px-2 py-0.5 rounded text-[8px] font-bold uppercase" :class="item.type === 'sph' ? 'bg-cyan-500/20 text-[#00E5FF]' : item.type === 'so' ? 'bg-amber-500/20 text-amber-400' : 'bg-orange-500/20 text-[#F97316]'">
                          {{ item.type.toUpperCase() }}
                        </span>
                      </td>
                      <td class="py-2.5 px-3 font-bold text-white">{{ item.docNo }}</td>
                      <td class="py-2.5 px-3 text-slate-400">{{ item.docDate }}</td>
                      <td class="py-2.5 px-3 text-slate-300 font-sans font-medium">{{ item.clientName }}</td>
                      <td class="py-2.5 px-3 text-right font-bold text-white">
                        {{ item.type === 'do' ? formatNumber(item.volume) + ' Liter' : 'Rp ' + formatNumber(item.totalAmount) }}
                      </td>
                      <td class="py-2.5 px-3 text-center">
                        <button @click="openPreviewModal(item)" class="px-2 py-1 bg-slate-800 hover:bg-[#00E5FF] hover:text-slate-950 text-white rounded text-[9px] font-bold transition-all cursor-pointer mr-1">
                          Cetak 🖨️
                        </button>
                        <button @click="removeHistory(idx)" class="px-1.5 text-slate-500 hover:text-red-400 cursor-pointer">
                          ✕
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

        <!-- MODAL BOTTOM BAR WITH CLOSE BUTTON -->
        <div class="bg-slate-950 border-t border-slate-800 p-3 sm:p-4 flex items-center justify-between shrink-0">
          <p class="text-[10px] font-mono text-slate-400">© 2026 PT Berkah Jasa Abadi • Internal Executive Portal</p>
          <button 
            @click="closeModal" 
            class="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            Tutup Portal ✕
          </button>
        </div>

      </div>

      <!-- INNER MODAL PRATINJAU KOP SURAT RESMI PT BERKAH JASA ABADI (PRINTABLE PREVIEW) -->
      <transition name="portal-fade">
        <div v-if="isPreviewOpen" class="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 overflow-y-auto" @click.self="isPreviewOpen = false">
          
          <div class="bg-white text-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border-4 border-slate-950 overflow-hidden my-auto flex flex-col max-h-[92vh]">
            
            <!-- Top Printable Modal Action Bar -->
            <div class="bg-slate-950 text-white p-4 flex justify-between items-center border-b border-slate-800 shrink-0 print:hidden">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-[#00E5FF]"></span>
                <span class="text-xs font-black font-outfit uppercase">PRATINJAU DOKUMEN RESMI PT BERKAH JASA ABADI</span>
              </div>

              <div class="flex items-center gap-3">
                <button 
                  @click="printDocument" 
                  class="px-4 py-2 bg-[#00E5FF] hover:bg-[#00b8cc] text-slate-950 font-black text-xs uppercase font-outfit rounded-xl transition-all shadow cursor-pointer flex items-center gap-1.5"
                >
                  <span>🖨️ CETAK / DOWNLOAD PDF</span>
                </button>
                <button 
                  @click="isPreviewOpen = false" 
                  class="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Tutup ✕
                </button>
              </div>
            </div>

            <!-- OFFICIAL PRINTABLE LETTERHEAD DOCUMENT CONTAINER -->
            <div id="printable-letterhead" class="p-6 sm:p-8 max-w-[210mm] mx-auto font-serif leading-normal bg-white text-slate-950">
              
              <!-- VIEW A: OFFICIAL SURAT PENAWARAN HARGA (SPH) LAYOUT (SINGLE A4 PAGE FIT) -->
              <div v-if="currentDoc.type === 'sph'" class="space-y-2.5 text-slate-950">
                <!-- Kop Surat Header -->
                <div class="border-b-2 border-slate-950 pb-2 flex items-center gap-4">
                  <div class="w-16 h-16 shrink-0 flex items-center justify-center">
                    <img src="/bja_logo.png" alt="Logo PT BJA" class="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h1 class="text-lg sm:text-xl font-black font-outfit text-slate-950 tracking-wide uppercase leading-tight">
                      PT BERKAH JASA ABADI
                    </h1>
                    <p class="text-[11px] font-semibold text-slate-800">
                      Trading for General trading, Hsd Industry Trading & Advertising
                    </p>
                    <p class="text-[11px] text-slate-700">
                      Jl. Raya Anyer km.8, Sumber Batu, Citangkil, Cilegon 42441
                    </p>
                    <p class="text-[11px] text-slate-700">
                      Email: info@berkahjasaabadi.co.id
                    </p>
                  </div>
                </div>

                <!-- Date Right-aligned -->
                <div class="text-right text-xs font-bold pt-0.5">
                  {{ currentDoc.cityAndDate || 'Cilegon, 05 September 2026' }}
                </div>

                <!-- Letter Metadata Grid -->
                <div class="text-xs space-y-0.5">
                  <div class="flex"><span class="w-16 font-medium">No.</span><span>: {{ currentDoc.docNo }}</span></div>
                  <div class="flex"><span class="w-16 font-medium">HAL</span><span>: {{ currentDoc.subject }}</span></div>
                  <div class="flex"><span class="w-16 font-medium">Lamp</span><span>: {{ currentDoc.lamp || '-' }}</span></div>
                </div>

                <!-- Recipient Address -->
                <div class="text-xs pt-1 space-y-0.5">
                  <p>Kepada Yth.</p>
                  <p class="font-bold">{{ currentDoc.clientPic }}</p>
                  <p class="font-bold">{{ currentDoc.clientName }}</p>
                  <p>{{ currentDoc.clientDept || 'Dept. Procurement' }}</p>
                </div>

                <!-- Salutation & Introductory Paragraph -->
                <div class="text-xs pt-1 space-y-1.5 leading-relaxed">
                  <p>Dengan hormat,</p>
                  <p class="text-justify">
                    Kami adalah PT. BERKAH JASA ABADI (BAJA) yang bergerak sebagai Suplier BBM jenis HSD / Solar Industri B50, MFO, berminat untuk Suplai Solar Industri untuk kebutuhan di perusahaan bapak. Berikut detail Penawaran terbaik dari kami:
                  </p>
                  <p>
                    <span class="font-bold">Spesifikasi:</span> {{ currentDoc.productSpec || 'Bio Solar Industri Spesifikasi Ditjend Migas / PT. Pertamina (Persero)' }}
                  </p>
                </div>

                <!-- Terms Details -->
                <div class="text-xs space-y-0.5 pt-0.5">
                  <div class="flex"><span class="w-24 font-bold">Periode</span><span>: {{ currentDoc.period }}</span></div>
                  <div class="flex"><span class="w-24 font-bold">Payment</span><span>: {{ currentDoc.paymentMethod }}</span></div>
                </div>

                <!-- Price Table -->
                <div class="pt-1">
                  <table class="w-full text-left border-collapse border border-slate-950 text-xs">
                    <thead>
                      <tr class="bg-slate-100 font-bold border-b border-slate-950 text-center">
                        <th class="p-1.5 border border-slate-950 w-1/3">
                          Skema Pembayaran<br><span class="font-normal italic text-[10px]">(Payment Method)</span>
                        </th>
                        <th class="p-1.5 border border-slate-950 w-1/3">
                          Harga Penawaran<br><span class="font-normal italic text-[10px]">(Termasuk PPN)</span>
                        </th>
                        <th class="p-1.5 border border-slate-950 w-1/3">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="p-1.5 border border-slate-950 font-bold">COD (Cash On Delivery)</td>
                        <td class="p-1.5 border border-slate-950 font-mono">Rp.{{ formatNumber(currentDoc.priceCod) }},- /Liter</td>
                        <td class="p-1.5 border border-slate-950 italic">*) sudah termasuk Ppn</td>
                      </tr>
                      <tr>
                        <td class="p-1.5 border border-slate-950 font-bold">Tempo 14 Hari</td>
                        <td class="p-1.5 border border-slate-950 font-mono">Rp.{{ formatNumber(currentDoc.priceTempo14) }},- /Liter</td>
                        <td class="p-1.5 border border-slate-950 italic">*) sudah termasuk Ppn</td>
                      </tr>
                      <tr>
                        <td class="p-1.5 border border-slate-950 font-bold">Tempo 30 Hari</td>
                        <td class="p-1.5 border border-slate-950 font-mono">Rp.{{ formatNumber(currentDoc.priceTempo30) }},- /Liter</td>
                        <td class="p-1.5 border border-slate-950 italic">*) sudah termasuk Ppn</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Notes Block -->
                <div class="text-xs pt-1 space-y-0.5">
                  <p class="font-bold">Note:</p>
                  <ol class="list-decimal list-inside space-y-0.5 text-slate-900 pl-1">
                    <li>Pengiriman BBM paling cepat 2 hari setelah P.O. (Purchased Order) Issued.</li>
                    <li>Harga penawaran bisa berubah mengikuti Publish Harga Dasar PT. Pertamina (Persero) setiap tanggal 01 dan 15 setiap bulannya.</li>
                  </ol>
                </div>

                <!-- Closing Paragraph -->
                <div class="text-xs pt-1 text-justify leading-relaxed">
                  Demikian Surat Penawaran ini kami sampaikan, bila ada yang perlu didiskusikan lebih lanjut kami dengan senang hati untuk bisa berdiskusi. Atas perhatian dan kerja samanya, kami ucapkan terimakasih banyak.
                </div>

                <!-- Signature Block Right Aligned -->
                <div class="flex justify-end pt-3 text-xs">
                  <div class="text-center w-60 space-y-0.5">
                    <p>Hormat kami,</p>
                    <p class="font-bold uppercase">PT BERKAH JASA ABADI</p>
                    
                    <div class="h-16 flex items-center justify-center my-1 relative">
                      <img src="/bja_logo.png" alt="Stempel PT BJA" class="h-14 object-contain opacity-85" />
                    </div>

                    <p class="font-bold underline text-xs tracking-wide">{{ currentDoc.signatoryName || 'Isolurroja H' }}</p>
                  </div>
                </div>
              </div>

              <!-- VIEW B: SALES ORDER (SO) & DELIVERY ORDER (DO) LAYOUT -->
              <div v-else class="space-y-6">
                <!-- OFFICIAL KOP SURAT HEADER -->
                <div class="border-b-4 border-slate-950 pb-4 flex items-center justify-between">
                  <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-2xl bg-slate-950 p-2 flex items-center justify-center border-2 border-slate-900 shrink-0">
                      <img src="/bja_logo.png" alt="Logo PT BJA" class="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h1 class="text-xl sm:text-2xl font-black font-outfit text-slate-950 tracking-tight leading-none uppercase">
                        PT. BERKAH JASA ABADI
                      </h1>
                      <p class="text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-1">
                        Oil & Gas Fuel Logistics • Outdoor Media DOOH • Enterprise AI SaaS
                      </p>
                      <p class="text-[9px] font-mono text-slate-500 mt-0.5">
                        Jl. Raya Anyer km.8, Sumber Batu, Citangkil, Cilegon 42441 | Telp: (0254) 889211 | Email: info@berkahjasaabadi.co.id
                      </p>
                    </div>
                  </div>

                  <div class="text-right hidden sm:block">
                    <span class="px-3 py-1 rounded bg-slate-950 text-[#00E5FF] font-mono font-bold text-[10px] uppercase border border-slate-800 inline-block">
                      OFFICIAL DOCUMENT
                    </span>
                    <span class="block text-[8px] font-mono text-slate-400 mt-1">Ref ID: {{ currentDoc.docNo }}</span>
                  </div>
                </div>

                <!-- DOCUMENT TITLE -->
                <div class="text-center">
                  <h2 class="text-xl font-black font-outfit uppercase underline tracking-wider text-slate-950">
                    {{ currentDoc.type === 'so' ? 'SALES ORDER (SURAT PESANAN)' : 'DELIVERY ORDER (SURAT JALAN BBM B50)' }}
                  </h2>
                  <p class="text-xs font-mono font-bold text-slate-700 mt-1">
                    Nomor: {{ currentDoc.docNo }}
                  </p>
                </div>

                <!-- DOCUMENT METADATA GRID -->
                <div class="grid grid-cols-2 gap-6 text-xs border border-slate-300 p-4 rounded-xl bg-slate-50">
                  <div>
                    <table class="text-left w-full">
                      <tr>
                        <td class="font-bold text-slate-500 w-28 py-0.5">Kepada Yth.</td>
                        <td class="font-black text-slate-950 uppercase py-0.5">: {{ currentDoc.clientName }}</td>
                      </tr>
                      <tr>
                        <td class="font-bold text-slate-500 py-0.5">U.P. / PIC</td>
                        <td class="font-medium text-slate-800 py-0.5">: {{ currentDoc.clientPic || '-' }}</td>
                      </tr>
                      <tr>
                        <td class="font-bold text-slate-500 py-0.5">Alamat / Lokasi</td>
                        <td class="font-medium text-slate-800 py-0.5">: {{ currentDoc.clientAddress || currentDoc.deliveryLocation }}</td>
                      </tr>
                    </table>
                  </div>

                  <div>
                    <table class="text-left w-full">
                      <tr>
                        <td class="font-bold text-slate-500 w-28 py-0.5">Tanggal Doc</td>
                        <td class="font-mono font-bold text-slate-950 py-0.5">: {{ currentDoc.docDate }}</td>
                      </tr>
                      <tr>
                        <td class="font-bold text-slate-500 py-0.5">Skema / Transaksi</td>
                        <td class="font-bold text-slate-950 py-0.5">: {{ currentDoc.deliveryScheme || currentDoc.type.toUpperCase() }}</td>
                      </tr>
                      <tr v-if="currentDoc.paymentTerms">
                        <td class="font-bold text-slate-500 py-0.5">Syarat Bayar</td>
                        <td class="font-bold text-slate-950 py-0.5">: {{ currentDoc.paymentTerms }}</td>
                      </tr>
                      <tr v-if="currentDoc.vehicleNo">
                        <td class="font-bold text-slate-500 py-0.5">Armada / Tanker</td>
                        <td class="font-mono font-bold text-slate-950 py-0.5">: {{ currentDoc.vehicleNo }} (Supir: {{ currentDoc.driverName }})</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <!-- TABLE OF ITEMS / SPECIFICATIONS -->
                <div>
                  <table class="w-full text-left border-collapse border border-slate-950 text-xs">
                    <thead>
                      <tr class="bg-slate-950 text-white font-outfit uppercase font-black text-[10px]">
                        <th class="p-2.5 border border-slate-950 text-center w-10">NO</th>
                        <th class="p-2.5 border border-slate-950">DESKRIPSI BARANG / LAYANAN</th>
                        <th class="p-2.5 border border-slate-950 text-right w-28">KUANTITAS</th>
                        <th v-if="currentDoc.type !== 'do'" class="p-2.5 border border-slate-950 text-right w-32">HARGA SATUAN</th>
                        <th v-if="currentDoc.type !== 'do'" class="p-2.5 border border-slate-950 text-right w-36">TOTAL HARGA (RP)</th>
                        <th v-else class="p-2.5 border border-slate-950 text-center w-40">KETERANGAN SEGEL</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-300">
                      <tr>
                        <td class="p-3 border border-slate-950 text-center font-bold">1</td>
                        <td class="p-3 border border-slate-950">
                          <p class="font-black text-slate-950 uppercase">{{ currentDoc.productName || 'BBM Industri B50 Biofuel Grade A' }}</p>
                          <p class="text-[10px] text-slate-500 mt-0.5">Standar Mutu Spesifikasi Dirjen Migas / Homogenitas 50% Biofuel</p>
                          <p v-if="currentDoc.densityTest" class="text-[9px] font-mono text-slate-700 font-bold mt-1">Uji Lab Density: {{ currentDoc.densityTest }}</p>
                        </td>
                        <td class="p-3 border border-slate-950 text-right font-mono font-bold text-slate-950">
                          {{ formatNumber(currentDoc.volume) }} L
                        </td>
                        <td v-if="currentDoc.type !== 'do'" class="p-3 border border-slate-950 text-right font-mono text-slate-950">
                          Rp {{ formatNumber(currentDoc.unitPrice) }}
                        </td>
                        <td v-if="currentDoc.type !== 'do'" class="p-3 border border-slate-950 text-right font-mono font-black text-slate-950">
                          Rp {{ formatNumber(currentDoc.subtotal) }}
                        </td>
                        <td v-else class="p-3 border border-slate-950 text-center font-mono text-[10px] text-slate-700 font-bold">
                          Segel Sampel: {{ currentDoc.sealNo || 'BJA-SEAL-OK' }}
                        </td>
                      </tr>
                    </tbody>
                    <tfoot v-if="currentDoc.type !== 'do'" class="bg-slate-50 font-bold text-slate-950 border-t-2 border-slate-950">
                      <tr>
                        <td colspan="4" class="p-2 text-right uppercase font-outfit">SUBTOTAL:</td>
                        <td class="p-2 text-right font-mono font-bold">Rp {{ formatNumber(currentDoc.subtotal) }}</td>
                      </tr>
                      <tr>
                        <td colspan="4" class="p-2 text-right uppercase font-outfit">PPN 11%:</td>
                        <td class="p-2 text-right font-mono">Rp {{ formatNumber(currentDoc.ppn) }}</td>
                      </tr>
                      <tr class="bg-slate-950 text-white font-black text-sm">
                        <td colspan="4" class="p-2.5 text-right font-outfit uppercase">TOTAL AKHIR:</td>
                        <td class="p-2.5 text-right font-mono">Rp {{ formatNumber(currentDoc.totalAmount) }}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <!-- PAYMENT BANK DETAILS (FOR SO) -->
                <div v-if="currentDoc.bankAccount" class="p-3.5 rounded-xl border border-slate-300 bg-slate-50 text-xs">
                  <p class="font-bold text-slate-950 uppercase font-outfit mb-1">REKENING PEMBAYARAN RESMI PT BERKAH JASA ABADI:</p>
                  <p class="font-mono font-bold text-slate-900">{{ currentDoc.bankAccount }}</p>
                </div>

                <!-- SIGNATURE & STAMP BLOCK -->
                <div class="grid grid-cols-2 gap-8 pt-4 border-t border-slate-300 text-center text-xs">
                  <div>
                    <p class="font-bold text-slate-500 uppercase text-[10px]">Diterima / Disetujui Oleh,</p>
                    <p class="font-bold text-slate-950 uppercase mt-1 text-xs font-outfit">{{ currentDoc.clientName }}</p>
                    <div class="h-20 flex items-center justify-center text-slate-300 text-[10px] italic">
                      ( Tanda Tangan & Stempel Klien )
                    </div>
                    <p class="font-bold text-slate-950 border-t border-slate-400 pt-1 w-48 mx-auto font-mono">Nama & Cap Perusahaan</p>
                  </div>

                  <div class="relative">
                    <p class="font-bold text-slate-500 uppercase text-[10px]">Hormat Kami,</p>
                    <p class="font-black text-slate-950 uppercase mt-1 text-xs font-outfit">PT. BERKAH JASA ABADI</p>
                    
                    <div class="h-20 flex items-center justify-center relative">
                      <img src="/bja_logo.png" alt="Stempel BJA" class="h-16 object-contain opacity-80" />
                    </div>

                    <p class="font-bold text-slate-950 border-t border-slate-400 pt-1 w-48 mx-auto font-mono">Direksi Operasional BJA</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </transition>

    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { t } from '../i18n';

// Props & Emits for Modal Dialog Controls
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  isPreviewOpen.value = false;
  emit('close');
};

// Lock body scroll when modal is open
watch(() => props.isOpen, (newVal) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = newVal ? 'hidden' : '';
  }
}, { immediate: true });

// Handle Escape Key Listener
const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    if (isPreviewOpen.value) {
      isPreviewOpen.value = false;
    } else if (props.isOpen) {
      closeModal();
    }
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  if (typeof document !== 'undefined') {
    document.body.style.overflow = '';
  }
});

// State
const isLoggedIn = ref(false);
const loginEmail = ref('');
const loginPassword = ref('');
const activeDocType = ref('sph'); // 'sph', 'so', 'do'
const isPreviewOpen = ref(false);

const currentDateStr = new Date().toLocaleDateString('id-ID', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// Forms Data
const formSph = ref({
  docNo: '004/SPH/BAJA-CJL/IX/2026',
  docDate: new Date().toISOString().substr(0, 10),
  cityAndDate: 'Cilegon, 05 September 2026',
  subject: 'Penawaran Harga bunker cilegon',
  lamp: '-',
  clientPic: 'Mr. Rhanom',
  clientName: 'PT. CJ Logistic',
  clientDept: 'Dept. Procurement',
  productSpec: 'Bio Solar Industri Spesifikasi Ditjend Migas / PT. Pertamina (Persero)',
  period: '01 - 15 September 2026',
  paymentMethod: 'Cash On Delivery (COD)',
  priceCod: 17200,
  priceTempo14: 18700,
  priceTempo30: 20850,
  signatoryName: 'Isolurroja H'
});

const formSo = ref({
  docNo: `BJA/SO/2026/09/${Math.floor(100 + Math.random() * 900)}`,
  refNo: `PO/2026/CLIENT-${Math.floor(10 + Math.random() * 90)}`,
  docDate: new Date().toISOString().substr(0, 10),
  buyerName: '',
  billingAddress: '',
  productName: 'BBM Industri B50 Biofuel Grade A',
  volume: 32000,
  unitPrice: 17200,
  bankAccount: 'Bank Mandiri - 1370008892110 (PT Berkah Jasa Abadi)'
});

const formDo = ref({
  docNo: `BJA/DO/2026/09/${Math.floor(100 + Math.random() * 900)}`,
  refSoNo: `BJA/SO/2026/09/008`,
  docDate: new Date().toISOString().substr(0, 10),
  consigneeName: '',
  deliveryLocation: '',
  driverName: '',
  vehicleNo: '',
  volume: 16000,
  sealNo: 'BJA-SEAL-88910 A/B',
  densityTest: '0.852 kg/L @ 15°C (Lolos Uji)'
});

// Generated Document Object for Printable Modal
const currentDoc = ref({});
const generatedHistory = ref([]);

// Authentication Handlers
const handleLogin = () => {
  if (loginEmail.value && loginPassword.value) {
    isLoggedIn.value = true;
  }
};

const handleLogout = () => {
  isLoggedIn.value = false;
};

// Reset Form
const resetActiveForm = () => {
  if (activeDocType.value === 'sph') {
    formSph.value.clientName = '';
    formSph.value.clientPic = '';
  } else if (activeDocType.value === 'so') {
    formSo.value.buyerName = '';
    formSo.value.billingAddress = '';
  } else {
    formDo.value.consigneeName = '';
    formDo.value.deliveryLocation = '';
    formDo.value.driverName = '';
    formDo.value.vehicleNo = '';
  }
};

// Document Generator
const generateDocument = () => {
  let docObj = { type: activeDocType.value };

  if (activeDocType.value === 'sph') {
    docObj = {
      ...docObj,
      ...formSph.value,
      clientName: formSph.value.clientName,
      subtotal: formSph.value.priceCod,
      ppn: 0,
      totalAmount: formSph.value.priceCod
    };
  } else if (activeDocType.value === 'so') {
    const sub = formSo.value.volume * formSo.value.unitPrice;
    const tax = Math.round(sub * 0.11);
    docObj = {
      ...docObj,
      ...formSo.value,
      clientName: formSo.value.buyerName,
      subtotal: sub,
      ppn: tax,
      totalAmount: sub + tax
    };
  } else if (activeDocType.value === 'do') {
    docObj = {
      ...docObj,
      ...formDo.value,
      clientName: formDo.value.consigneeName,
      subtotal: 0,
      ppn: 0,
      totalAmount: 0
    };
  }

  currentDoc.value = docObj;
  generatedHistory.value.unshift(docObj);
  isPreviewOpen.value = true;
};

// Open Existing Document from History
const openPreviewModal = (item) => {
  currentDoc.value = item;
  isPreviewOpen.value = true;
};

const removeHistory = (index) => {
  generatedHistory.value.splice(index, 1);
};

// Print Action
const printDocument = () => {
  window.print();
};

// Format Number Helper
const formatNumber = (num) => {
  if (!num) return '0';
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

// Simple Terbilang Text
const terbilangText = computed(() => {
  const amount = currentDoc.value.totalAmount || 0;
  if (amount <= 0) return 'Nol';
  return formatNumber(amount) + ' Rupiah';
});
</script>

<style scoped>
.portal-fade-enter-active,
.portal-fade-leave-active {
  transition: all 0.3s ease;
}

.portal-fade-enter-from,
.portal-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

.form-input {
  width: 100%;
  background-color: #0F172A;
  border: 1px solid #1E293B;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  color: #ffffff;
  font-size: 0.75rem;
  font-family: monospace;
  transition: all 0.2s;
  cursor: text !important;
}

button, a, select {
  cursor: pointer !important;
}

input, select {
  cursor: auto !important;
}

.form-input:focus {
  outline: none;
  border-color: #00E5FF;
  box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
}

/* Print CSS Styles for Perfect 1-Page A4 Fit */
@media print {
  @page {
    size: A4 portrait;
    margin: 8mm 10mm;
  }
  html, body {
    height: auto !important;
    background: #ffffff !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  body * {
    visibility: hidden;
  }
  #printable-letterhead, #printable-letterhead * {
    visibility: visible;
  }
  #printable-letterhead {
    position: absolute;
    left: 0;
    top: 0;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    background: #ffffff !important;
    color: #000000 !important;
    font-size: 10pt !important;
    line-height: 1.3 !important;
    page-break-after: avoid !important;
    page-break-inside: avoid !important;
  }
  .print\:hidden {
    display: none !important;
  }
}
</style>
