import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { translations } from './translations';
import { Button, YoutubeEmbed } from './components';

// --- ICONS ---

const AppleIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 37 58"
    className={`text-gray-600 ${className}`}
    aria-label="Apple Logo"
    role="img"
  >
    <path
      fill="currentColor"
      d="M18.8946 9.4862C23.3578 8.5873 26.2126 5.02838 26.2252 0.605225C22.0285 0.639036 17.7027 5.26745 18.8946 9.4862ZM35.3509 39.9143C27.7762 39.9143 22.0536 33.1051 23.9656 25.7921C24.3705 24.2429 25.2228 22.833 26.2101 21.5701C26.6828 20.9653 27.6248 20.3407 27.6736 19.5318C27.8492 16.6253 25.1824 13.8634 22.7843 12.5889C18.2262 10.1669 11.2454 11.4889 8.88917 16.3288C7.83889 18.4864 8.47923 20.8392 7.66627 23.0259C6.50011 26.1631 4.15825 28.2162 2.50211 31.0334C0.229797 34.899 -0.30993 40.3291 1.58734 44.4275C7.06383 56.2586 25.4342 57.619 32.8569 46.9025C34.2878 44.8365 35.3438 42.4381 35.3509 39.9143Z"
    />
  </svg>
);

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-500 transition-transform transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);


// --- HOOK FOR TRANSLATIONS ---
type Language = 'en' | 'id';
type TFunction = (key: keyof typeof translations['en']) => string;


const useModuleTranslations = () => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language') as Language;
    return savedLang || 'en';
  });
  
  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  const t: TFunction = (key) => {
    return translations[language][key] || translations['en'][key];
  };

  return { t, language, setLanguage };
};

// --- LANGUAGE SWITCHER ---
const LanguageSwitcher: React.FC<{ language: Language, setLanguage: (lang: Language) => void, className?: string }> = ({ language, setLanguage, className }) => {
    const buttonClass = (lang: Language) => 
        `font-semibold transition-colors duration-200 ${language === lang ? 'text-brand' : 'text-gray-500 hover:text-gray-800'}`;

    return (
        <div className={`flex items-center gap-2 text-sm ${className}`}>
            <button onClick={() => setLanguage('en')} className={buttonClass('en')}>EN</button>
            <span className="text-gray-300">|</span>
            <button onClick={() => setLanguage('id')} className={buttonClass('id')}>ID</button>
        </div>
    );
};


// --- MODULE CONTENT COMPONENTS ---

const CodeBlock = ({ children }: { children: React.ReactNode }) => {
    const highlightSyntax = (code: string) => {
        const tokenRegex = /(\/\/.*)|(".*?")|(\b(?:var|let|if|else|while|for|in|func|class|return|print|case|switch|default|break)\b)|(\b(?:Int|String|Bool|Double|Void|Person|Array)\b)|(\b\d+(?:\.\d+)?\b)/g;

        const highlighted = code
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(tokenRegex, (match, comment, str, keyword, type, num) => {
                if (comment) return `<span class="text-gray-400">${comment}</span>`;
                if (str) return `<span class="text-green-300">${str}</span>`;
                if (keyword) return `<span class="text-purple-400">${keyword}</span>`;
                if (type) return `<span class="text-teal-300">${type}</span>`;
                if (num) return `<span class="text-blue-300">${num}</span>`;
                return match;
            });
        return highlighted;
    };
    
    const codeString = React.Children.toArray(children).join('');
    return (
        <pre className="bg-gray-800 text-gray-200 p-4 rounded-md overflow-x-auto text-sm my-4">
            <code dangerouslySetInnerHTML={{ __html: highlightSyntax(codeString) }} />
        </pre>
    );
};

interface ChapterProps {
    t: TFunction;
}

const ChapterNav: React.FC<{
  chapters: { id: number; title: string }[];
  activeChapter: number;
  onSelectChapter: (id: number) => void;
  className?: string;
}> = ({ chapters, activeChapter, onSelectChapter, className = '' }) => {
  return (
    <nav className={className}>
      <ul>
        {chapters.map(chap => (
          <li key={chap.id}>
            <button
              onClick={() => onSelectChapter(chap.id)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 ${
                activeChapter === chap.id
                  ? 'bg-brand-light text-brand'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {chap.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};


const Chapter1: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch1_title')}</h2>
        <YoutubeEmbed embedId="CHXV7icz4KI" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch1_intro') }}></p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('simple_example')}</h3>
        <p className="mb-4">{t('ch1_example_swift')}</p>
        <CodeBlock>
{`print("Mulai program") // 1. Cetak pesan awal
var a = 5             // 2. Simpan nilai 5 ke variabel a
var b = 2             // 3. Simpan nilai 2 ke variabel b
var c = a + b         // 4. Jumlahkan a dan b, simpan ke c
print("Hasil penjumlahan:", c) // 5. Cetak hasil penjumlahan
print("Program selesai") // 6. Cetak pesan akhir`}
        </CodeBlock>
        <p className="mb-4">{t('ch1_example_explanation_title')}</p>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch1_example_explanation_list')}}></ul>
        <p className="mb-2 font-medium">{t('ch1_example_output_title')}</p>
        <CodeBlock>
{`Mulai program
Hasil penjumlahan: 7
Program selesai`}
        </CodeBlock>
        <p className="mb-4">{t('ch1_example_note')}</p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('real_world_analogy')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch1_analogy')}}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('exercises')}</h3>
        <div className="space-y-6">
            <div>
                <h4 className="font-bold">{t('ch1_exercise1_title')}</h4>
                <p>{t('ch1_exercise1_desc')}</p>
                <div className="mt-2 text-sm p-3 bg-gray-100 rounded-md" dangerouslySetInnerHTML={{__html: t('ch1_exercise1_steps')}}></div>
            </div>
            <div>
                <h4 className="font-bold">{t('ch1_exercise2_title')}</h4>
                <p>{t('ch1_exercise2_desc')}</p>
                <CodeBlock>{`print("Langkah 1")\nprint("Langkah 2")\nprint("Langkah 3")`}</CodeBlock>
                <p>{t('ch1_exercise2_q')}</p>
            </div>
            <div>
                <h4 className="font-bold">{t('ch1_exercise3_title')}</h4>
                <p>{t('ch1_exercise3_desc')}</p>
                <CodeBlock>{`// Contoh kode (jangan dijalankan, ini mengandung kesalahan!)
x = x + 5
var x = 10
print(x)`}</CodeBlock>
                <p>{t('ch1_exercise3_q')}</p>
            </div>
        </div>

        <h3 className="text-xl font-bold mt-8 mb-2">{t('exercise_discussion')}</h3>
         <div className="space-y-6">
            <div>
                <h4 className="font-bold">{t('ch1_discussion1_title')}</h4>
                <p>{t('ch1_discussion1_ans')}</p>
                <ul className="list-disc list-inside my-2 space-y-1" dangerouslySetInnerHTML={{__html: t('ch1_discussion1_list')}}></ul>
                <p>{t('ch1_discussion1_conclusion')}</p>
            </div>
            <div>
                <h4 className="font-bold">{t('ch1_discussion2_title')}</h4>
                <p>{t('ch1_discussion2_ans')}</p>
                <CodeBlock>{`Langkah 1\nLangkah 2\nLangkah 3`}</CodeBlock>
                <p>{t('ch1_discussion2_conclusion')}</p>
                <CodeBlock>{`Langkah 3\nLangkah 1\nLangkah 2`}</CodeBlock>
                <p className="mt-2" dangerouslySetInnerHTML={{__html: t('ch1_discussion2_point')}}></p>
            </div>
            <div>
                <h4 className="font-bold">{t('ch1_discussion3_title')}</h4>
                <p>{t('ch1_discussion3_ans')}</p>
                <p className="mt-2">{t('ch1_discussion3_correct')}</p>
                <CodeBlock>{`var x = 10
x = x + 5
print(x)`}</CodeBlock>
                <p className="mt-2" dangerouslySetInnerHTML={{__html: t('ch1_discussion3_conclusion')}}></p>
            </div>
        </div>
    </>
);

const Chapter2: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch2_title')}</h2>
        <YoutubeEmbed embedId="p_1ACQsfDCE" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch2_intro') }}></p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch2_if_else_title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch2_if_else_desc') }}></p>
        <CodeBlock>{`if kondisi {
    // blok kode jika kondisi bernilai true (benar)
} else {
    // blok kode jika kondisi bernilai false (salah)
}`}</CodeBlock>
        
        <p className="font-medium mt-6 mb-2">{t('ch2_example_grade_title')}</p>
        <CodeBlock>{`let nilai = 75
if nilai >= 60 {
    print("Lulus")
} else {
    print("Tidak lulus")
}`}</CodeBlock>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch2_example_grade_explanation') }}></p>

        <p className="font-medium mt-6 mb-2">{t('ch2_else_if_title')}</p>
        <CodeBlock>{`let score = 85
if score >= 90 {
    print("Grade A")
} else if score >= 80 {
    print("Grade B")
} else if score >= 70 {
    print("Grade C")
} else if score >= 60 {
    print("Grade D")
} else {
    print("Grade F")
}`}</CodeBlock>
        <p className="mb-4">{t('ch2_else_if_explanation')}</p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch2_conditions_title')}</h3>
        <p className="mb-2">{t('ch2_conditions_desc')}</p>
        <div className="p-3 bg-gray-100 rounded-md text-sm mb-2" dangerouslySetInnerHTML={{ __html: t('ch2_conditions_operators')}}></div>
        <p className="mb-4">{t('ch2_conditions_bool')}</p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('real_world_analogy')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch2_analogy') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch2_example_pos_neg_title')}</h3>
        <p className="mb-2">{t('ch2_example_pos_neg_desc')}</p>
        <CodeBlock>{`let num = -3
if num > 0 {
    print("Bilangan \\(num) adalah POSITIF")
} else if num == 0 {
    print("Bilangan \\(num) adalah NOL")
} else {
    print("Bilangan \\(num) adalah NEGATIF")
}`}</CodeBlock>
        <p className="mb-4">{t('ch2_example_pos_neg_explanation')}</p>
    </>
);
const Chapter3: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch3_title')}</h2>
        <YoutubeEmbed embedId="7faqsQYsGxQ" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch3_intro') }}></p>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch3_for_loop_title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch3_for_loop_desc') }}></p>
        <CodeBlock>{`for i in 1...5 {
    print("Perulangan ke-\\(i)")
}`}</CodeBlock>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch3_for_loop_explanation') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch3_while_loop_title')}</h3>
        <p className="mb-2">{t('ch3_while_loop_desc')}</p>
        <CodeBlock>{`while kondisi {
    // blok kode yang diulang selama kondisi == true
}`}</CodeBlock>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('ch3_while_loop_mechanism') }}></p>
        <p className="font-medium mt-4 mb-2">{t('ch3_while_loop_example')}</p>
        <CodeBlock>{`var hitung = 3
while hitung > 0 {
    print("Hitung mundur: \\(hitung)")
    hitung -= 1 // mengurangi nilai hitung setiap iterasi
}
print("Selesai!")`}</CodeBlock>
        <p className="mt-4" dangerouslySetInnerHTML={{ __html: t('ch3_while_loop_important') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch3_repeat_while_title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch3_repeat_while_desc') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('real_world_analogy')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-2" dangerouslySetInnerHTML={{ __html: t('ch3_analogy')}}></ul>
    </>
);
const Chapter4: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch4_title')}</h2>
        <YoutubeEmbed embedId="urs_AmjQI_A" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch4_intro') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch4_features_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch4_features_list')}}></ul>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch4_creating_title')}</h3>
        <p className="mb-2">{t('ch4_creating_desc')}</p>
        <CodeBlock>{`var buah = ["Apel", "Pisang", "Mangga"]`}</CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch4_accessing_title')}</h3>
        <p className="mb-2">{t('ch4_accessing_desc')}</p>
        <CodeBlock>{`let pertama = buah[0] // "Apel"
print("Buah pertama: \\(pertama)")`}</CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch4_methods_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch4_methods_list')}}></ul>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch4_looping_title')}</h3>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('ch4_looping_desc') }}></p>
        <CodeBlock>{`for item in buah {
    print("Saya suka \\(item)")
}`}</CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('real_world_analogy')}</h3>
        <p className="mb-4">{t('ch4_analogy')}</p>
    </>
);
const Chapter5: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch5_title')}</h2>
        <YoutubeEmbed embedId="iDsQtChPHLg" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch5_intro') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch5_concatenation_title')}</h3>
        <p className="mb-2">{t('ch5_concatenation_desc')}</p>
        <CodeBlock>{`let sapaan = "Halo"
let nama = "Budi"
let pesan = "\\(sapaan), \\(nama)!" // hasilnya "Halo, Budi!"`}</CodeBlock>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch5_properties_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch5_properties_list')}}></ul>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch5_substring_title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch5_substring_desc') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch5_iteration_title')}</h3>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('ch5_iteration_desc') }}></p>
        <CodeBlock>{`for ch in "Swift" {
    print(ch)
}`}</CodeBlock>
    </>
);
const Chapter6: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch6_title')}</h2>
        <YoutubeEmbed embedId="FEVftPv6cjk" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch6_intro') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch6_features_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch6_features_list')}}></ul>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('simple_example')}</h3>
        <CodeBlock>{`ALGORITMA hitungFaktorial(n):
  DEKLARASI hasil = 1
  UNTUK i dari 1 hingga n:
    hasil = hasil * i
  TULISKAN hasil`}</CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch6_tips_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch6_tips_list')}}></ul>
    </>
);
const Chapter7: React.FC<ChapterProps> = ({ t }) => (
     <>
        <h2 className="text-2xl font-bold mb-4">{t('ch7_title')}</h2>
        <YoutubeEmbed embedId="HvdVp1jVGdA" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch7_intro') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch7_concepts_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch7_concepts_list')}}></ul>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('simple_example')}</h3>
        <CodeBlock>{`class Person {
    // Properties
    var name: String = ""
    var age: Int = 0

    // Method
    func introduce() {
        print("Hi, nama saya \\(name), umur \\(age) tahun.")
    }
}

// Create an object (instance)
let person1 = Person()
person1.name = "Ani"
person1.age = 20
person1.introduce() // Output: Hi, nama saya Ani, umur 20 tahun.`}
        </CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch7_why_oop_title')}</h3>
        <div className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch7_why_oop_desc')}}></div>
    </>
);
const Chapter8: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch8_title')}</h2>
        <YoutubeEmbed embedId="WxBz__sMe14" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch8_intro') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch8_var_let_title')}</h3>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('ch8_var_let_desc') }}></p>
        <CodeBlock>{`var umur = 15       // bisa diubah
umur = 16           // OK

let tahunLahir = 2008 // tidak bisa diubah (konstanta)
// tahunLahir = 2009 // Ini akan error!`}</CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch8_data_types_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch8_data_types_list')}}></ul>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch8_operations_title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch8_operations_desc') }}></p>
    </>
);
const Chapter9: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch9_title')}</h2>
        <YoutubeEmbed embedId="WBBuuEMWjMA" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch9_intro') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch9_benefits_title')}</h3>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch9_benefits_list')}}></ul>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch9_structure_title')}</h3>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('ch9_structure_desc') }}></p>
        <CodeBlock>{`func namaFungsi(parameter1: Tipe1) -> TipeReturn {
    // kode di dalam fungsi
    return nilaiDariTipeReturn
}`}</CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch9_calling_title')}</h3>
        <p className="mb-2">{t('ch9_calling_desc')}</p>
        <CodeBlock>{`func tambah(a: Int, b: Int) -> Int {
    return a + b
}

let hasil = tambah(a: 3, b: 5) // memanggil fungsi
print(hasil) // Output: 8`}</CodeBlock>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch9_return_vs_void_title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch9_return_vs_void_desc') }}></p>
    </>
);
const Chapter10: React.FC<ChapterProps> = ({ t }) => (
    <>
        <h2 className="text-2xl font-bold mb-4">{t('ch10_title')}</h2>
        <YoutubeEmbed embedId="91SatdMnYWY" t={t} />
        <h3 className="text-xl font-bold mt-6 mb-2">{t('introduction')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch10_intro') }}></p>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch10_relational_title')}</h3>
        <p className="mb-2">{t('ch10_relational_desc')}</p>
        <CodeBlock>{`let a = 10, b = 7
print(a > b)      // true
print(a == b)     // false
print("cat" < "dog") // true (c comes before d)`}</CodeBlock>

        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch10_logical_title')}</h3>
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('ch10_logical_desc') }}></p>
        <ul className="list-disc list-inside mb-4 space-y-1" dangerouslySetInnerHTML={{ __html: t('ch10_logical_list')}}></ul>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch10_truth_tables_title')}</h3>
        <p className="mb-2">{t('ch10_truth_tables_desc')}</p>
        <CodeBlock>{`// AND (&&)
true  && true  // true
true  && false // false

// OR (||)
true  || false // true
false || false // false

// NOT (!)
!true // false`}</CodeBlock>
        
        <h3 className="text-xl font-bold mt-6 mb-2">{t('ch10_combinations_title')}</h3>
        <p className="mb-4" dangerouslySetInnerHTML={{ __html: t('ch10_combinations_desc') }}></p>
    </>
);

// --- MAIN PAGE LAYOUT ---

export const ModulePage: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useModuleTranslations();

  const chapters = useMemo(() => [
    { id: 1, title: t('ch1_sidebar_title') },
    { id: 2, title: t('ch2_sidebar_title') },
    { id: 3, title: t('ch3_sidebar_title') },
    { id: 4, title: t('ch4_sidebar_title') },
    { id: 5, title: t('ch5_sidebar_title') },
    { id: 6, title: t('ch6_sidebar_title') },
    { id: 7, title: t('ch7_sidebar_title') },
    { id: 8, title: t('ch8_sidebar_title') },
    { id: 9, title: t('ch9_sidebar_title') },
    { id: 10, title: t('ch10_sidebar_title') },
  ], [t]);

  const handleSelectChapter = (id: number) => {
    setActiveChapter(id);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handlePrevChapter = () => {
    setActiveChapter(prev => {
        const newChapter = Math.max(1, prev - 1);
        if (newChapter !== prev) window.scrollTo(0, 0);
        return newChapter;
    });
  };

  const handleNextChapter = () => {
      setActiveChapter(prev => {
        const newChapter = Math.min(chapters.length, prev + 1);
        if (newChapter !== prev) window.scrollTo(0, 0);
        return newChapter;
      });
  };

  const renderContent = () => {
    switch (activeChapter) {
      case 1: return <Chapter1 t={t} />;
      case 2: return <Chapter2 t={t} />;
      case 3: return <Chapter3 t={t} />;
      case 4: return <Chapter4 t={t} />;
      case 5: return <Chapter5 t={t} />;
      case 6: return <Chapter6 t={t} />;
      case 7: return <Chapter7 t={t} />;
      case 8: return <Chapter8 t={t} />;
      case 9: return <Chapter9 t={t} />;
      case 10: return <Chapter10 t={t} />;
      default: return <Chapter1 t={t} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 z-20 flex items-center px-4 md:px-6">
          <Link to="/mode-select" className="flex items-center gap-2 focus:outline-none rounded-sm">
            <AppleIcon className="h-6 w-auto" />
            <span className="font-medium text-base tracking-wide text-gray-600">Developer Academy</span>
          </Link>
          <div className="flex-grow"></div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
            <Link to="/mode-select">
              <Button variant="secondary">{t('backButton')}</Button>
            </Link>
          </div>
      </header>
      <div className="flex pt-14">
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-6 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">{t('moduleTitle')}</h1>
          <h2 className="text-base font-bold text-gray-900 mb-4">{t('chapters')}</h2>
          <ChapterNav chapters={chapters} activeChapter={activeChapter} onSelectChapter={handleSelectChapter} />
        </aside>
        <main className="flex-grow p-4 sm:p-6 md:p-10 bg-gray-50">
          <div className="md:hidden mb-4 relative">
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-full flex justify-between items-center p-3 bg-white border border-gray-300 rounded-md text-left"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
            >
                <span className="font-semibold">{chapters.find(c => c.id === activeChapter)?.title}</span>
                <ChevronDownIcon isOpen={isMenuOpen} />
            </button>
            {isMenuOpen && (
                <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-30">
                    <ChapterNav 
                      chapters={chapters} 
                      activeChapter={activeChapter} 
                      onSelectChapter={handleSelectChapter}
                      className="p-2"
                    />
                </div>
            )}
          </div>
          <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg border border-gray-200">
            {renderContent()}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
                <Button onClick={handlePrevChapter} disabled={activeChapter === 1} variant="secondary">
                    {t('previousButton')}
                </Button>
                <span className="text-sm font-medium text-gray-500">{`${t('chapters')} ${activeChapter} / ${chapters.length}`}</span>
                <Button onClick={handleNextChapter} disabled={activeChapter === chapters.length}>
                    {t('nextChapterButton')}
                </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
