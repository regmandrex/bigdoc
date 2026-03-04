/**
 * Surgery procedure listing and detail content.
 * Used by /surgery listing and /surgery/[slug] detail pages.
 */

export type ProcedureSection = {
  heading: string;
  body: string;
  list?: string[];
};

export type ProcedureFaq = {
  q: string;
  a: string;
};

export type ProcedureDetail = {
  slug: string;
  title: string;
  /** SEO: include "surgery" for targeting e.g. "Congenital anomalies surgery" */
  metaTitle?: string;
  shortDescription: string;
  image: string;
  href: string;
  sections: ProcedureSection[];
  faq: ProcedureFaq[];
  metaDescription: string;
};

/** Procedures shown on /surgery. Conjoined twins links to existing page; others to /surgery/[slug]. */
export const PROCEDURES_LIST: ProcedureDetail[] = [
  {
    slug: 'conjoined-twins-surgery',
    title: 'Conjoined twins surgery',
    metaTitle: 'Conjoined twins surgery',
    shortDescription:
      'Complex separation surgery led by Dr Samson Olori at UATH—including the hospital’s first successful separation.',
    image: '/assets/images/conjoined-twins/separation-in-pictures.png',
    href: '/conjoined-twins-surgery',
    sections: [],
    faq: [],
    metaDescription:
      'Dr Samson Olori led the first successful conjoined twins separation at UATH. Expert conjoined twins surgery in Abuja and Nigeria.',
  },
  {
    slug: 'paediatric-surgery',
    title: 'Paediatric surgery',
    metaTitle: 'Paediatric surgery',
    shortDescription:
      'Expert surgical care for children: from newborns to teenagers. Complex and routine paediatric surgery in Abuja and across Nigeria.',
    image: '/assets/images/case-neonatal.png',
    href: '/surgery/paediatric-surgery',
    sections: [
      {
        heading: 'What is paediatric surgery?',
        body: 'Paediatric surgery is the branch of surgery that deals with conditions in children from birth through adolescence. It includes neonatal surgery (newborns), infant and child surgery, and covers a wide range of conditions—from congenital anomalies and tumours to hernias, appendicitis, and other common problems. Dr Samson Olori and his team offer expert paediatric surgical care in Abuja and across Nigeria.',
      },
      {
        heading: 'When to see a paediatric surgeon',
        body: 'You may be referred to a paediatric surgeon if your child has a condition that may need an operation—for example, a hernia, abdominal pain (e.g. appendicitis), a lump or mass, a birth defect, or a condition that has not improved with other treatments. We also offer second opinions for families who want another view on their child’s care.',
      },
      {
        heading: 'What we offer',
        body: 'We provide consultation, evaluation, and surgical treatment for a broad range of paediatric conditions. We work with hospitals and neonatal/paediatric intensive care teams to ensure safe surgery and follow-up. Our goal is to deliver high-quality, transparent care for your child and family.',
      },
    ],
    faq: [
      {
        q: 'What age range do paediatric surgeons treat?',
        a: 'Paediatric surgeons typically care for children from birth (including premature and full-term newborns) up to adolescence. The exact upper age can vary; we see children through their teenage years when the condition is best managed by a paediatric specialist.',
      },
      {
        q: 'Where is paediatric surgery performed?',
        a: 'We work with hospitals in Abuja and Nigeria that have the facilities, anaesthesia, and nursing support needed for safe paediatric surgery. We can guide you through referral and booking after evaluating your child.',
      },
    ],
    metaDescription:
      'Expert paediatric surgery in Abuja and Nigeria. From neonatal and congenital conditions to hernia, appendicitis and more. Book a consultation.',
  },
  {
    slug: 'congenital-anomalies',
    title: 'Congenital anomalies',
    metaTitle: 'Congenital anomalies surgery',
    shortDescription:
      'Conditions present from birth: abdominal wall defects, intestinal obstruction and related surgical care.',
    image: '/assets/images/case-congenital.png',
    href: '/surgery/congenital-anomalies',
    sections: [
      {
        heading: 'What are congenital anomalies?',
        body: 'Congenital anomalies are structural or functional conditions present from birth. In paediatric surgery, we commonly see abdominal wall defects (e.g. gastroschisis, omphalocele), intestinal obstruction (atresia, malrotation), anorectal malformations, and other conditions affecting the newborn’s abdomen and digestive tract. Early evaluation and, when needed, surgery can improve outcomes and quality of life.',
      },
      {
        heading: 'When should my child be seen?',
        body: 'If your baby was born with an obvious abdominal defect, or if there are signs of feeding difficulty, persistent vomiting, or failure to pass stool, you should seek specialist paediatric surgical care as soon as possible. Many of these conditions are picked up at birth or in the first days of life; early referral to a paediatric surgeon is key.',
      },
      {
        heading: 'What we do',
        body: 'Dr Samson Olori and his team evaluate each child with a full history and examination, and arrange any needed imaging or tests. We then plan surgery and care in a setting equipped for neonatal and infant surgery, with follow-up to support recovery and growth.',
      },
    ],
    faq: [
      {
        q: 'Is surgery always needed for congenital anomalies?',
        a: 'Not always. Some conditions are managed with careful monitoring and feeding support. When surgery is needed, we discuss the timing, type of operation, and what to expect before and after.',
      },
      {
        q: 'Where is this surgery done?',
        a: 'We work with hospitals in Abuja and Nigeria that have the facilities and team for neonatal and infant surgery. We can guide you through referral and booking once we have evaluated your child.',
      },
    ],
    metaDescription:
      'Paediatric surgery for congenital anomalies in Abuja and Nigeria: abdominal wall defects, intestinal obstruction and related care. Book a consultation.',
  },
  {
    slug: 'neonatal-infant-surgery',
    title: 'Neonatal & infant surgery',
    metaTitle: 'Neonatal & infant surgery',
    shortDescription: 'Specialised surgery for newborns and infants requiring early intervention.',
    image: '/assets/images/case-neonatal.png',
    href: '/surgery/neonatal-infant-surgery',
    sections: [
      {
        heading: 'What is neonatal and infant surgery?',
        body: 'Neonatal and infant surgery covers operations on newborns and very young babies. This includes surgery for congenital conditions (such as abdominal wall defects or intestinal blockages), necrotising enterocolitis, pyloric stenosis, and other conditions that need early surgical care. These procedures require expertise in anaesthesia and postoperative care for small babies.',
      },
      {
        heading: 'When to see us',
        body: 'If your newborn has been diagnosed with a condition that may need surgery, or if you have been referred by a paediatrician or obstetrician, we can arrange a consultation. Early referral allows us to plan investigations and surgery in a timely way.',
      },
      {
        heading: 'What to expect',
        body: 'We will review your child’s notes and any scans, examine your baby, and discuss the best plan—whether that is immediate surgery, a short period of preparation, or further tests. We work with neonatal and paediatric intensive care teams where needed to ensure safe surgery and recovery.',
      },
    ],
    faq: [
      {
        q: 'How soon can a newborn have surgery?',
        a: 'It depends on the condition. Some emergencies need surgery within hours or days of birth; others can be scheduled after the baby is stabilised. We individualise the plan for each child.',
      },
      {
        q: 'What follow-up is needed after neonatal surgery?',
        a: 'Follow-up is tailored to the procedure and your child’s progress. We schedule reviews to check wound healing, feeding, growth, and development, and to address any concerns.',
      },
    ],
    metaDescription:
      'Expert neonatal and infant surgery in Abuja and Nigeria. Specialised care for newborns requiring surgical intervention. Book a consultation.',
  },
  {
    slug: 'paediatric-tumours',
    title: 'Paediatric tumours',
    metaTitle: 'Tumour surgery',
    shortDescription:
      'Evaluation and surgical care for childhood tumours in collaboration with oncology teams.',
    image: '/assets/images/case-tumour.png',
    href: '/surgery/paediatric-tumours',
    sections: [
      {
        heading: 'What are paediatric tumours?',
        body: 'Paediatric tumours are growths that occur in children—these can be benign (non-cancerous) or malignant (cancerous). Common types that may need surgery include abdominal tumours (e.g. Wilms tumour, neuroblastoma), soft tissue tumours, and other masses. Evaluation and treatment are usually done in partnership with paediatric oncologists and other specialists.',
      },
      {
        heading: 'When to see a paediatric surgeon',
        body: 'If your child has been found to have a lump or mass, or if imaging has shown a tumour, a paediatric surgeon can help with biopsy, staging, and surgical removal where appropriate. Referrals often come from paediatricians or oncologists after initial assessment.',
      },
      {
        heading: 'What we do',
        body: 'We assess the child and review all imaging and pathology. We work with the oncology team to decide the best sequence of treatment—surgery, chemotherapy, or both—and perform surgery when indicated, with careful follow-up.',
      },
    ],
    faq: [
      {
        q: 'Is every childhood lump a tumour?',
        a: 'No. Many lumps in children are benign (e.g. lymph nodes, cysts). We help determine what the lump is and whether it needs removal or further treatment.',
      },
      {
        q: 'How is paediatric tumour surgery different from adult?',
        a: 'Children’s bodies and responses to treatment differ. Paediatric surgeons and oncologists are trained to manage childhood tumours with protocols that aim for cure while preserving growth and function.',
      },
    ],
    metaDescription:
      'Paediatric tumour evaluation and surgery in Abuja and Nigeria. Working with oncology teams for childhood tumours. Book a consultation.',
  },
  {
    slug: 'hernia-common-conditions',
    title: 'Hernia & common conditions',
    metaTitle: 'Hernia & common conditions surgery',
    shortDescription:
      'Hernias, appendicitis, thyroid surgery and other routine paediatric surgical cases, including second opinions.',
    image: '/assets/images/case-common.png',
    href: '/surgery/hernia-common-conditions',
    sections: [
      {
        heading: 'What we treat',
        body: 'We see a wide range of common paediatric surgical conditions, including inguinal and umbilical hernias, appendicitis, thyroid and neck lumps, undescended testes, and other routine procedures. We also offer second opinions for families who want another view on a diagnosis or treatment plan.',
      },
      {
        heading: 'Hernias in children',
        body: 'Inguinal hernias are common in infants and children and are usually repaired with a small operation. Umbilical hernias often close on their own but sometimes need surgery if they persist or cause symptoms. We explain the options and timing for your child.',
      },
      {
        heading: 'Appendicitis and other abdominal conditions',
        body: 'Appendicitis in children can present with abdominal pain, vomiting, and fever. Prompt evaluation and, when needed, appendectomy (removal of the appendix) prevent complications. We also manage other abdominal conditions such as intussusception when referred.',
      },
      {
        heading: 'When to book a consultation',
        body: 'If your child has been diagnosed with a hernia, appendicitis, or another condition that may need surgery, or if you would like a second opinion, you can book a consultation. We will review the history, examine your child, and recommend the next steps.',
      },
    ],
    faq: [
      {
        q: 'How long does hernia surgery take in children?',
        a: 'Inguinal hernia repair in children is usually a short procedure. Most children go home the same day or after a brief stay, depending on age and hospital protocol.',
      },
      {
        q: 'Can my child eat normally after appendectomy?',
        a: 'We start with fluids and then advance to normal diet as tolerated. We give clear instructions at discharge and at follow-up.',
      },
    ],
    metaDescription:
      'Paediatric hernia repair, appendicitis, thyroid surgery and common conditions in Abuja and Nigeria. Second opinions available. Book a consultation.',
  },
  {
    slug: 'appendectomy-appendix-surgery',
    title: 'Appendix surgery (Appendectomy)',
    metaTitle: 'Appendix surgery (Appendectomy)',
    shortDescription: 'Surgical removal of the appendix for appendicitis. Open and laparoscopic options with expert care and follow-up.',
    image: '/assets/images/case-common.png',
    href: '/surgery/appendectomy-appendix-surgery',
    sections: [
      {
        heading: 'What is appendicitis?',
        body: 'Appendicitis is inflammation of the appendix—a small, finger-like pouch attached to the large intestine on the lower right side of the abdomen. The appendix has no known essential function but can become blocked and infected, filling with pus. When that happens it causes severe pain and can lead to serious complications if not treated promptly. Surgery to remove the appendix (appendectomy) is the main and most effective treatment.',
      },
      {
        heading: 'Causes of appendicitis',
        body: 'Appendicitis occurs when the appendix becomes blocked, leading to infection. When blocked, bacteria multiply inside the appendix, causing inflammation and pus, which increases pressure and pain. Common causes include:',
        list: [
          'Fecal matter: hardened stool can lodge in the appendix and cause a blockage.',
          'Infection: a gastrointestinal infection can swell lymph nodes, which may compress and block the appendix.',
          'Foreign bodies: rarely, objects such as seeds, stones, or tumours can obstruct the appendix.',
          'Enlarged lymphoid follicles: sometimes the lymphoid tissue inside the appendix swells and blocks it.',
        ],
      },
      {
        heading: 'Symptoms of appendicitis',
        body: 'Symptoms usually develop suddenly and worsen over time. They include:',
        list: [
          'Abdominal pain: often starts around the navel and then shifts to the lower right abdomen; pain may increase with movement, coughing, or pressing on the area.',
          'Nausea and vomiting: often accompany the pain.',
          'Loss of appetite: a common early symptom.',
          'Fever: a mild fever may develop as the body fights the infection.',
          'Constipation or diarrhoea: some people have changes in bowel movements.',
          'Swelling and tenderness: the area around the appendix may become swollen and tender.',
        ],
      },
      {
        heading: 'Diagnosis of appendicitis',
        body: 'Diagnosing appendicitis involves several steps:',
        list: [
          'Physical examination: the doctor presses on the abdomen to check for tenderness, especially in the lower right side; rebound tenderness (pain when pressure is released) is a common sign.',
          'Blood tests: can show a high white blood cell count, suggesting infection.',
          'Urine tests: help rule out a urinary tract infection or kidney stones, which can mimic appendicitis.',
          'Imaging: ultrasound and CT scans are often used to visualise the appendix and confirm inflammation or an enlarged or ruptured appendix.',
        ],
      },
      {
        heading: 'Treatment: open vs laparoscopic appendectomy',
        body: 'Appendectomy can be done in two main ways. Open appendectomy uses a single larger incision in the lower right abdomen to remove the appendix; it is effective and often used when the appendix has burst or there is widespread infection. Laparoscopic appendectomy uses several small incisions, a camera, and fine instruments to remove the appendix; this method usually means less pain and a quicker recovery. Both are effective; the choice depends on your condition and the surgeon’s assessment. There are no proven alternative treatments—attempting home remedies or alternative therapies can be dangerous. If you suspect appendicitis, seek medical attention immediately.',
      },
      {
        heading: 'What happens if appendicitis is not treated in time?',
        body: 'If appendicitis is not treated promptly, the appendix can rupture, leading to peritonitis—a life-threatening infection of the abdominal cavity. This can cause widespread infection as bacteria spread through the abdomen, abscess formation (pockets of pus that may need drainage and antibiotics), and sepsis—a severe body-wide response to infection that can lead to organ failure and death if not treated urgently. Early diagnosis and treatment are crucial.',
      },
      {
        heading: 'Prevention and after surgery',
        body: 'There is no guaranteed way to prevent appendicitis, but a high-fibre diet (plenty of fruits, vegetables, and whole grains), regular medical check-ups, and staying well hydrated may help reduce the risk. After surgery you may have some pain and will need pain relief; you will be advised to avoid strenuous activities and heavy lifting for a few weeks. Start with liquids and gradually return to your normal diet as advised. Follow-up appointments are important to ensure proper healing.',
      },
    ],
    faq: [
      { q: 'Why do I need an appendectomy?', a: 'If the inflamed appendix is not removed, it can burst and cause a severe infection in the abdomen (peritonitis), which can be life-threatening. Appendectomy removes the source of infection and prevents this.' },
      { q: 'What should I do if I suspect appendicitis?', a: 'Seek medical attention immediately. Early diagnosis and treatment are crucial to prevent complications. Do not rely on home remedies.' },
      { q: 'Is appendectomy safe?', a: 'Appendectomy is a common and generally safe procedure. As with any surgery, there are risks such as infection, bleeding, and complications from anaesthesia—we discuss these with you before surgery.' },
      { q: 'How long does the surgery take?', a: 'An appendectomy typically takes about 1 to 2 hours, depending on whether it is open or laparoscopic and whether there are complications.' },
      { q: 'What should I expect after surgery?', a: 'You may have some pain managed with painkillers. You will be advised to avoid strenuous activities and heavy lifting for a few weeks. Follow-up appointments are essential to ensure proper healing.' },
      { q: 'Can I eat normally after an appendectomy?', a: 'Initially you may be advised to start with liquids and then gradually return to your normal diet. Follow your doctor’s dietary recommendations to avoid complications.' },
      { q: 'Are there any alternatives to surgery?', a: 'Surgery is the standard treatment. In some cases antibiotics may be used for a mild infection, but this is not a long-term solution and surgery is often still needed to prevent recurrence.' },
    ],
    metaDescription: 'Appendix surgery (appendectomy) for appendicitis. Open and laparoscopic options. Book a consultation.',
  },
  {
    slug: 'hernia-repair-surgery',
    title: 'Hernia repair surgery',
    metaTitle: 'Hernia repair surgery',
    shortDescription: 'Repair of inguinal, umbilical, femoral and hiatal hernias. Open, laparoscopic and robotic options with clear aftercare.',
    image: '/assets/images/case-common.png',
    href: '/surgery/hernia-repair-surgery',
    sections: [
      {
        heading: 'What is a hernia?',
        body: 'A hernia happens when an internal organ or tissue bulges through a weak or soft spot in the muscle or fascia that normally contains it. When left untreated, some hernias can lead to other complications—for example a hiatal hernia may cause severe acid reflux or gastroesophageal reflux disease (GERD). Not every hernia requires surgery; some may need only medication or other non-invasive care. Whether surgery is needed depends on the severity and should be determined after a proper examination.',
      },
      {
        heading: 'Types of hernia',
        body: 'Some types are more common in men, others in women; hernias may be congenital (present from birth) or acquired later. Common types include:',
        list: [
          'Inguinal hernias: occur in the lower abdomen near the pubic area, due to weakening of the internal inguinal ring; most common in men.',
          'Femoral hernias: also called groin hernias; more common in women. A weakness in the lower groin allows the intestinal sac to slip out of position. Once diagnosed, immediate repair is often recommended to prevent complications.',
          'Hiatal hernias: caused by weakness in the muscle that separates the chest from the abdomen; can lead to acid reflux into the oesophagus from the stomach.',
          'Umbilical hernias: a section of intestine passes through the abdominal wall near the navel; they mostly affect newborn children.',
        ],
      },
      {
        heading: 'Hernia symptoms',
        body: 'Symptoms vary with the type and location of the hernia. With a hernia in the stomach area you may notice distension, tenderness, abdominal pain and discomfort, or in some cases ulcers, bleeding, or narrowing of the oesophagus. With an inguinal hernia you may feel pain and discomfort in the groin. In general, symptoms that should prompt a check include: unusual bulging or protrusion, abnormal swelling, tenderness in the area, and ongoing discomfort. We assess the size, location, and impact on your daily life before recommending treatment.',
      },
      {
        heading: 'What causes a hernia?',
        body: 'Hernias are mainly caused by loosening, weakening, or opening of the muscle that houses a particular organ or tissue, so that the organ or tissue pushes through the weak spot. Some hernias are congenital; others develop later in life due to strain, ageing, or other factors.',
      },
      {
        heading: 'Hernia treatment: open, laparoscopic, and robotic repair',
        body: 'Surgery repairs a hernia by putting the organ or tissue back in place and typically reconstructing or closing the hernia sac. The weak spot is often reinforced with a synthetic mesh to reduce the chance of recurrence. There are three main approaches, all done under general anaesthesia:',
        list: [
          'Open surgery: an incision is made, the hernia sac is identified, the bulging tissue or organ is put back in place, and the soft spot is lined with mesh to strengthen the area and promote healing.',
          'Laparoscopic (keyhole) repair: very thin instruments are passed through small cuts (often near the umbilicus); a laparoscope sends images to a monitor so the surgeon can locate and repair the hernia. It is usually less invasive and painful, with faster recovery.',
          'Robotic repair: similar to laparoscopic surgery but with very small or minimal incisions and advanced three-dimensional (3D) imaging instead of 2D, giving the surgeon greater precision.',
        ],
      },
      {
        heading: 'Prevention and recovery',
        body: 'Some hernias are congenital and cannot be prevented, but healthy lifestyle changes can reduce the risk of developing or worsening a hernia: eat a balanced diet with plenty of fruits and vegetables, avoid smoking and persistent heavy coughing (see a doctor for ongoing coughs or sneezing), maintain an ideal body weight through exercise and diet, and avoid extremely strenuous activity and lifting weights beyond your capacity. Recovery depends on the type of repair; we give you clear instructions on activity, driving, and follow-up.',
      },
    ],
    faq: [
      { q: 'Can a hernia be cured without surgery?', a: 'Surgery is the only permanent cure for a hernia. Small, symptom-free hernias may be watched in some cases; we advise based on your type and risk.' },
      { q: 'Can I repair my hernia without surgery?', a: 'Surgery is the only advisable way to permanently cure a hernia. Hernias typically do not go away on their own.' },
      { q: 'What is the best treatment for hernia?', a: 'Surgery is the best and permanent treatment when a hernia is causing symptoms or is at risk of complications. The choice of open, laparoscopic, or robotic repair depends on your hernia and general health.' },
      { q: 'How long is recovery after hernia surgery?', a: 'Laparoscopic and robotic repair often allow a faster return to normal activities; open surgery may take longer. We give specific instructions on lifting, driving, and work.' },
    ],
    metaDescription: 'Hernia repair surgery: inguinal, umbilical, femoral and hiatal. Open and laparoscopic options. Book a consultation.',
  },
  {
    slug: 'piles-surgery-hemorrhoidectomy',
    title: 'Piles surgery (Haemorrhoidectomy)',
    metaTitle: 'Piles surgery (Haemorrhoidectomy)',
    shortDescription: 'Surgical removal of haemorrhoids (piles) when other treatments have not helped. Effective, lasting relief with clear aftercare.',
    image: '/assets/images/case-common.png',
    href: '/surgery/piles-surgery-hemorrhoidectomy',
    sections: [
      {
        heading: 'What are piles (haemorrhoids)?',
        body: 'Piles (haemorrhoids) are swollen veins in and around the anal region. They occur in the lowermost part of the anus and can cause severe pain and discomfort because the blood vessels become enlarged and stretch the surrounding skin. Piles that bulge out near the anal opening are called external haemorrhoids; those on the inner part of the anal opening that you cannot easily feel are called internal haemorrhoids. Piles affect people of all ages and can be treated effectively—including with surgery when needed.',
      },
      {
        heading: 'Symptoms of piles',
        body: 'Symptoms to look out for include:',
        list: [
          'Bleeding: bleeding during or after passing stool is one of the most common symptoms and often indicates internal piles.',
          'Swelling: small balloon-like swellings around the anal region; the anus may feel tender.',
          'Anal pain: piles often cause pain in the anal region and can make it difficult to pass stool.',
          'Lumps near the anus: lumps on or around the anal surface.',
          'Anal itching: haemorrhoids can cause severe itching around the anus, usually on the outside.',
          'Slimy discharge: a slimy discharge with stool can be a symptom of piles.',
          'Sore skin: sore skin or skin sticking out after a bowel movement around the anus.',
        ],
      },
      {
        heading: 'What causes piles?',
        body: 'Common causes include:',
        list: [
          'Low-fibre diet: too little fibre leads to harder, smaller stools and straining when passing stool.',
          'Pregnancy: the enlarged uterus can put pressure on the colon and anus, often leading to internal piles.',
          'Heavy weight lifting: can increase pressure and contribute to piles.',
          'Constipation: straining to pass stool puts strain on the blood vessels around the anus.',
          'Prolonged diarrhoea: passing loose stool for a long time can also contribute to piles.',
        ],
      },
      {
        heading: 'Diagnosis of piles',
        body: 'The surgeon will assess your symptoms before suggesting treatment. If you have signs of external piles, the affected area will be examined. If symptoms suggest internal piles, a rectal examination may be needed. Once the diagnosis is confirmed, we can discuss the best treatment—including surgery when appropriate.',
      },
      {
        heading: 'When is piles surgery (haemorrhoidectomy) done?',
        body: 'Haemorrhoidectomy is surgery to remove piles. It is suitable when you have: very large internal haemorrhoids; internal haemorrhoids that still cause symptoms after non-surgical treatment; large external haemorrhoids that cause major discomfort and make it hard to keep the anal area clean; or both internal and external haemorrhoids. You will have general or spinal anaesthesia so you do not feel pain. The operation is typically done as a day case and you will usually go home the same day. Full recovery takes around 1 to 2 weeks. Long-term success depends largely on improving your bowel habits—enough fibre and fluids—to prevent constipation and straining.',
      },
      {
        heading: 'Going home and care after piles surgery',
        body: 'Immediately after surgery you may receive a long-acting local anaesthetic for 6 to 12 hours of pain relief. If you are not staying overnight, you leave once the anaesthesia has worn off and you have passed urine; someone should drive you home. You can expect some pain afterward; your doctor will prescribe pain relief. For the first few days, stick to liquids and a plain diet (e.g. plain rice, bananas, dry toast, crackers, applesauce), then return to everyday foods and gradually increase fibre. Follow-up is usually arranged at 2 to 3 weeks. We advise on hygiene, diet, and when to contact us if you have bleeding, fever, or worsening pain.',
      },
    ],
    faq: [
      { q: 'What is the quickest way to get rid of piles?', a: 'The quickest and most definitive relief from piles is surgical removal (haemorrhoidectomy) when your symptoms and findings are suitable for surgery.' },
      { q: 'Can haemorrhoids be cured permanently?', a: 'Yes. Haemorrhoids can be cured permanently with surgery. Long-term success also depends on good bowel habits to prevent new piles from forming.' },
      { q: 'Can piles be cured on their own?', a: 'Typically piles do not cure themselves. You may get temporary relief from symptoms but they often return. Surgery or other treatments are needed for lasting relief.' },
      { q: 'Is there a home remedy for piles?', a: 'Cold compresses and ointments can temporarily relieve pain and symptoms, but for a permanent solution you may need surgery. We can advise on the best option for you.' },
      { q: 'What are the best antibiotics for piles?', a: 'Antibiotics are sometimes prescribed after piles surgery to prevent infection at the surgery site. Your doctor will advise if you need them.' },
    ],
    metaDescription: 'Piles surgery (haemorrhoidectomy) for severe haemorrhoids. Lasting relief with expert care. Book a consultation.',
  },
  {
    slug: 'kidney-stone-surgery',
    title: 'Kidney stone surgery',
    metaTitle: 'Kidney stone surgery',
    shortDescription: 'Treatment for kidney stones that do not pass on their own. Options include ESWL, ureteroscopy, and surgery when needed.',
    image: '/assets/images/case-common.png',
    href: '/surgery/kidney-stone-surgery',
    sections: [
      {
        heading: 'What is kidney stone disease?',
        body: 'Kidney stone disease (nephrolithiasis or urolithiasis) is a common urological condition in which solid masses, or “stones,” form in the kidneys from minerals and salts in the urine. These stones can be as small as a grain of sand or as large as a golf ball. Small stones may pass through the urinary tract without causing significant problems; larger stones can cause severe pain and complications.',
      },
      {
        heading: 'What causes kidney stones?',
        body: 'Stones form when the urine contains more crystal-forming substances—such as calcium, oxalate, and uric acid—than the fluid in the urine can dilute. Factors that can increase the risk include: dehydration; a diet high in protein, salt, or sugar; obesity; certain medical conditions such as gout or inflammatory bowel disease; and family history of kidney stones.',
      },
      {
        heading: 'How is kidney stone disease diagnosed?',
        body: 'Doctors use several methods to diagnose kidney stones: imaging tests (CT scans, X-rays, or ultrasound) to see the stones; urine tests to check for substances that form stones; and blood tests to identify high levels of stone-forming minerals. We can arrange these and refer you to a urologist for treatment when needed.',
      },
      {
        heading: 'Symptoms of kidney stones',
        body: 'Kidney stones can cause severe pain that often starts suddenly and may change location as the stone moves through the urinary tract. Symptoms may include: sharp pain in the back, side, lower abdomen, or groin; blood in the urine; frequent urination; nausea and vomiting; and fever and chills if an infection is present. If you experience these, see a doctor for evaluation.',
      },
      {
        heading: 'How is kidney stone disease treated?',
        body: 'Treatment depends on the size and type of the stones. Options include: medications to help pass small stones; extracorporeal shock wave lithotripsy (ESWL), which uses sound waves to break up stones; ureteroscopy, where a thin tube is inserted to locate and remove or fragment stones; percutaneous nephrolithotomy, a surgical procedure for large stones; and open surgery, though less common, for very large or complicated stones. We can refer you to a urologist for the most suitable option.',
      },
      {
        heading: 'How to prevent kidney stones',
        body: 'To reduce the risk of developing kidney stones: drink plenty of water throughout the day; eat a balanced diet rich in fruits and vegetables; limit salt, sugar, and animal protein; avoid foods high in oxalates (such as spinach and nuts) if advised; and maintain a healthy weight. Lifestyle changes and good fluid intake can help prevent recurrence.',
      },
      {
        heading: 'What happens if kidney stones are not treated in time?',
        body: 'Untreated kidney stones can lead to serious complications: persistent pain and discomfort, urinary tract infections, kidney damage or scarring, and obstruction of the urinary tract that can lead to kidney failure. Prompt treatment is essential to avoid these complications.',
      },
    ],
    faq: [
      { q: 'What are kidney stones made of?', a: 'Kidney stones are typically made of calcium oxalate, but they can also be made of other substances such as uric acid, struvite, and cystine.' },
      { q: 'How can I tell if I have a kidney stone?', a: 'Severe pain in the back, side, lower abdomen, or groin, blood in the urine, frequent urination, nausea, and vomiting are common symptoms. If you experience these, consult a doctor.' },
      { q: 'Can kidney stones be passed without treatment?', a: 'Yes. Small stones can often pass through the urinary tract on their own with adequate hydration and pain management. Larger stones usually need a procedure or surgery.' },
      { q: 'How long does it take to pass a kidney stone?', a: 'It can vary from a few days to a few weeks, depending on the stone’s size and location. Your doctor will advise on pain control and when to seek urgent care.' },
      { q: 'How long is the recovery period after kidney stone surgery?', a: 'Recovery varies. Non-invasive procedures like ESWL often have shorter recovery times (typically a few days); more invasive surgery may require a few weeks.' },
      { q: 'Can kidney stones recur?', a: 'Yes. Once you have had a kidney stone, you are more likely to develop another. Dietary changes and staying hydrated can help reduce the risk.' },
      { q: 'Can kidney stones cause permanent kidney damage?', a: 'If left untreated, kidney stones can cause chronic kidney disease or permanent kidney damage. Prompt treatment is important to avoid complications.' },
    ],
    metaDescription: 'Kidney stone surgery and other treatments for stones. Expert evaluation and care. Book a consultation.',
  },
  {
    slug: 'tonsils-surgery-tonsillectomy',
    title: 'Tonsil surgery (Tonsillectomy)',
    metaTitle: 'Tonsil surgery (Tonsillectomy)',
    shortDescription: 'Removal of the tonsils for recurrent tonsillitis, obstructive sleep apnoea, or other indications. Safe procedure with clear recovery guidance.',
    image: '/assets/images/case-common.png',
    href: '/surgery/tonsils-surgery-tonsillectomy',
    sections: [
      {
        heading: 'What is tonsillectomy?',
        body: 'Tonsillectomy is an operation to remove the tonsils—two oval lumps of lymphoid tissue at the back of the throat. The tonsils help trap bacteria and viruses, but when they are repeatedly infected or enlarged they can cause more harm than good: recurrent tonsillitis, obstructive sleep apnoea, trouble swallowing, or a constant sore throat. When these problems affect health or day-to-day life, removal is often recommended. The same applies when tonsil stones (hard debris in the tonsil crypts) cause bad breath and discomfort. Recurrent infections left untreated can lead to abscesses, middle ear infections, or in rare cases rheumatic fever, so timely assessment is important.',
      },
      {
        heading: 'When is tonsillectomy recommended?',
        body: 'An ENT specialist will suggest surgery when the history and examination support it. Typical reasons include:',
        list: [
          'Recurrent tonsillitis: for example more than seven episodes in a year, or five in two consecutive years.',
          'Obstructive sleep apnoea: enlarged tonsils cause difficulty breathing, snoring, or broken sleep.',
          'Difficulty swallowing or feeding because the tonsils are too large.',
          'A long-standing sore throat that does not improve with medication.',
          'Tonsil stones that cause ongoing halitosis or discomfort.',
        ],
      },
      {
        heading: 'Surgical techniques',
        body: 'Several techniques are used, each with trade-offs in bleeding, pain, and healing: cold dissection (scalpel removal—effective but can mean more postoperative bleeding); electrocautery (heat to cut and seal vessels—less bleeding but often more painful recovery); harmonic scalpel (ultrasonic energy—precise cut, less bleeding and faster healing in many cases); and coblation (radiofrequency to dissolve rather than cut the tonsils—often less painful and quicker healing). All carry a small risk of bleeding, infection, temporary voice change, and reaction to anaesthesia. Choosing an experienced ENT surgeon and a well-equipped facility helps keep complications low.',
      },
      {
        heading: 'Tests before surgery',
        body: 'To confirm the need for surgery and rule out other causes, the doctor may arrange a throat swab to identify bacteria, blood tests to check for other infections or immune issues, and sometimes a sleep study (polysomnography) to see if enlarged tonsils are driving sleep apnoea. After that, treatment options—including surgery—are explained.',
      },
      {
        heading: 'Alternatives to surgery',
        body: 'Surgery is not always the first step. Antibiotics can treat bacterial tonsillitis; pain relievers (e.g. ibuprofen, paracetamol) ease sore throats; and corticosteroids may be used for severe swelling and pain. At home, saltwater gargles, plenty of fluids, and honey or lemon can soothe the throat. Tonsil cryptolysis is a laser procedure that shrinks the tonsils without full removal and may suit some people who want to avoid a full tonsillectomy. If infections keep coming back or symptoms persist, surgery is often the most effective long-term option.',
      },
      {
        heading: 'What to expect after surgery',
        body: 'You can expect throat pain (especially on swallowing), sometimes felt in the ears or jaw. Painkillers are prescribed and should be taken as directed. Drink plenty of fluids to avoid dehydration and stick to soft foods (porridge, yoghurt, mashed potato, soups) at first; then gradually return to solid food. Avoid spicy, crunchy, or acidic foods that could irritate the raw area. Rest and avoid heavy lifting or strenuous activity until you are fully recovered. Recovery is often around 10–14 days, though some people need up to three weeks; children usually bounce back faster than adults. Contact your doctor if you have heavy bleeding from the throat, high fever or signs of infection, or severe dehydration (e.g. not passing urine, dizziness, unusual weakness). Most people heal well and see lasting benefits: fewer throat infections, better sleep, and less daily discomfort.',
      },
    ],
    faq: [
      { q: 'Is tonsillectomy painful?', a: 'Yes. Most people have mild to moderate throat pain for several days, sometimes with ear or jaw discomfort. Pain relief, plenty of fluids, and soft foods help. We give clear instructions at discharge.' },
      { q: 'Can adults have tonsillectomy?', a: 'Yes. Adults can have the procedure; recovery is often longer and pain can be greater than in children, and the risk of bleeding is a bit higher. Many still benefit when recurrent tonsillitis or sleep apnoea affects their life.' },
      { q: 'What are the risks?', a: 'The main risks are bleeding (during or after surgery), infection, and reaction to anaesthesia. Dehydration can happen if you avoid drinking because of throat pain. With good aftercare and follow-up, serious complications are uncommon.' },
      { q: 'How long until I can eat normally?', a: 'Stick to cool fluids and soft foods at first, then gradually return to a normal diet as comfort allows—usually within about two weeks. Avoid spicy, crunchy, or acidic foods until the throat has healed.' },
    ],
    metaDescription: 'Tonsil surgery (tonsillectomy) for recurrent tonsillitis and sleep apnoea. Safe procedure with expert care. Book a consultation.',
  },
  {
    slug: 'anal-fistula-repair-surgery',
    title: 'Anal fistula repair surgery',
    metaTitle: 'Anal fistula repair surgery',
    shortDescription: 'Surgical repair of anal fistula—an abnormal tunnel between the skin and the anal canal. Effective treatment with careful aftercare.',
    image: '/assets/images/case-common.png',
    href: '/surgery/anal-fistula-repair-surgery',
    sections: [
      {
        heading: 'What is an anal fistula?',
        body: 'An anal fistula is an abnormal passage (tunnel) that forms between the lining inside the anus and the skin around the anus. It usually develops after an anal abscess: when the glands that produce fluid in the anus become blocked, bacteria can build up and form a pocket of infected tissue and fluid. Once the abscess drains, the channel that formed for drainage may stay open and become a fistula. Left untreated, fistulas can lead to recurrent infection, damage to the sphincter muscles (affecting continence), and in rare cases other complications—so repair is important.',
      },
      {
        heading: 'Causes and diagnosis',
        body: 'The main cause is an anal abscess or blocked anal glands. Other causes can include Crohn’s disease, radiotherapy, injury or trauma, tuberculosis, and certain sexually transmitted infections. Diagnosis involves a physical examination of the area and sometimes use of a fistula probe to trace the tract. Imaging such as MRI, fistulography, or endoscopic ultrasound may be used to map the fistula and assess the sphincter muscles before planning surgery.',
      },
      {
        heading: 'Treatment options',
        body: 'Fistula tracts need to be treated to prevent complications. The choice of operation depends on the fistula’s location, cause, and complexity. Options include:',
        list: [
          'Fistulotomy: the fistula tract is laid open, infected tissue removed, and the wound allowed to heal.',
          'Ligation of the intersphincteric fistula tract (LIFT): for more complex or deep fistulas; the tract is identified between the sphincter muscles, ligated, and the infected tissue removed.',
          'Endorectal advancement flap: a flap of rectal lining is used to cover and seal the internal opening, which can reduce the amount of sphincter muscle that needs to be divided.',
          'Seton placement, fibrin glue, or collagen plug may be used in selected cases.',
        ],
      },
      {
        heading: 'Symptoms and when to seek care',
        body: 'Common signs are swelling and tenderness around the anus, ongoing discharge of pus or blood (often with a bad smell), pain when sitting or moving, and sometimes difficulty controlling wind or stool if the sphincter is involved. The opening on the skin may close and reopen as the abscess builds and drains again. If you notice these symptoms, see a doctor; we can arrange examination and imaging so the fistula can be mapped and the right operation planned.',
      },
      {
        heading: 'Prevention and aftercare',
        body: 'To reduce the risk of fistula or recurrence: maintain good anal hygiene, eat a fibre-rich diet, avoid straining when passing stool, stay well hydrated, and treat constipation promptly. After surgery we advise on wound care, diet (e.g. fibre, fluids), and follow-up; some procedures have a longer healing time but aim to preserve continence.',
      },
    ],
    faq: [
      { q: 'Can a fistula heal without surgery?', a: 'Fistulas rarely heal on their own. Surgery is the standard way to cure them and prevent recurrence, abscess, or damage to the sphincter.' },
      { q: 'Is fistula surgery permanently curative?', a: 'Surgical repair is the definitive treatment. Success depends on the type of fistula and the procedure chosen; we discuss the best option and recurrence risk for your case.' },
      { q: 'What is recovery like?', a: 'Recovery varies by procedure. We advise on wound care, diet (e.g. fibre, fluids), and follow-up. Some procedures have a longer healing time but aim to preserve continence.' },
    ],
    metaDescription: 'Anal fistula repair surgery. Expert evaluation and surgical treatment. Book a consultation.',
  },
  {
    slug: 'anal-fissure-repair-surgery',
    title: 'Anal fissure repair surgery',
    metaTitle: 'Anal fissure repair surgery',
    shortDescription: 'Surgery for chronic anal fissure—a tear in the lining of the anus that does not heal. Relief from pain and bleeding.',
    image: '/assets/images/case-common.png',
    href: '/surgery/anal-fissure-repair-surgery',
    sections: [
      {
        heading: 'What is an anal fissure?',
        body: 'An anal fissure is a tear or shallow ulcer in the lining of the anal canal, usually close to the opening of the anus. It is often painful and may or may not bleed. Fissures usually result from trauma to the anal canal—commonly from straining—and affect people of all ages, with a peak in children, young adults, and middle-aged people. If a fissure becomes chronic and does not heal, it can form extra scar tissue (sometimes called a sentinel pile or skin tag) that hangs near the opening. Do not self-diagnose or self-medicate; a proper examination is needed.',
      },
      {
        heading: 'What causes anal fissures?',
        body: 'The main cause is strain that tears the skin around the anus. Contributing factors include:',
        list: [
          'Reduced blood flow to the anorectal area.',
          'Straining from constipation or passing hard stools.',
          'Frequent diarrhoea.',
          'Pregnancy and straining during childbirth.',
          'Tightness or spasm of the ring of muscle (sphincter) that opens and closes the anus.',
          'Abnormal sphincter muscle function.',
          'Injury from scratching or wiping too forcefully.',
        ],
      },
      {
        heading: 'Symptoms and diagnosis',
        body: 'Symptoms include blood on the stool or toilet paper, a visible crack or tear around the anus, constipation, burning and itching, sometimes frequent urination, and in some cases a smelly discharge. Diagnosis is by physical examination. The doctor may perform a digital rectal examination to check for other problems; in people aged 45 and over, a colonoscopy may be suggested to rule out other causes. It is important not to skip the examination out of embarrassment—getting the right diagnosis is the first step to effective treatment.',
      },
      {
        heading: 'When is surgery recommended?',
        body: 'Many fissures improve with fibre, fluids, topical treatments (e.g. glyceryl trinitrate or calcium channel blocker ointments), and avoiding straining. When a fissure fails to heal and becomes chronic, or when symptoms are severe, surgery is the most effective and permanent option. A common operation is lateral internal sphincterotomy, which relaxes the anal sphincter to improve blood flow and allow the fissure to heal. We discuss the procedure, risks (including a small chance of affecting continence), and what to expect during recovery.',
      },
      {
        heading: 'How to prevent anal fissures',
        body: 'Lifestyle changes and good habits can reduce the risk: drink plenty of water and healthy fluids; eat more fibre and consider a fibre supplement if needed; wipe gently after using the toilet; avoid straining when you pass stool; do not ignore the urge to open your bowels (holding it in can make stools harder and harder to pass); and aim for regular exercise (e.g. at least 150 minutes of physical activity per week). With treatment, many fissures heal within about six weeks.',
      },
    ],
    faq: [
      { q: 'Is there a permanent cure for anal fissure?', a: 'Surgery is the most effective and permanent treatment when the fissure is chronic. Non-surgical options can work for some acute fissures; we advise against self-medicating and recommend a proper assessment.' },
      { q: 'Who should I see for an anal fissure?', a: 'A gastroenterologist or colorectal surgeon is best placed to diagnose and treat anal fissures. We can refer you after an initial assessment if needed.' },
      { q: 'How long does an anal fissure take to heal?', a: 'With the right treatment, many fissures heal within about six weeks. Chronic fissures that do not respond to conservative treatment often need surgery.' },
      { q: 'What does an anal fissure look like?', a: 'It usually appears as one or more tears or cracks around the anus. If a sentinel pile (skin tag) forms, a small extra piece of skin may be visible just below the opening.' },
      { q: 'Are anal fissures painful?', a: 'Yes. Many people feel sharp pain when passing stool and a burning sensation afterward. Pain relief and softening the stool with fibre and fluids can help while you heal.' },
    ],
    metaDescription: 'Anal fissure repair surgery for chronic fissures. Expert care and follow-up. Book a consultation.',
  },
  {
    slug: 'ear-drum-repair-surgery-tympanoplasty',
    title: 'Eardrum repair surgery (Tympanoplasty)',
    metaTitle: 'Eardrum repair surgery (Tympanoplasty)',
    shortDescription: 'Surgery to repair a perforated or damaged eardrum. Restores hearing and reduces the risk of recurrent ear infections.',
    image: '/assets/images/case-common.png',
    href: '/surgery/ear-drum-repair-surgery-tympanoplasty',
    sections: [
      {
        heading: 'What is eardrum repair surgery (tympanoplasty)?',
        body: 'The eardrum (tympanic membrane) is a vital part of the ear: it separates the outer ear from the middle ear and vibrates when sound waves hit it, so we can hear. When the eardrum is perforated or ruptured—because of infection, trauma, or chronic ear disease—it can lead to hearing loss, recurrent ear infections, and other complications. Tympanoplasty is surgery to repair the eardrum. The aim is to restore the eardrum’s integrity, improve hearing, and prevent further infection or injury to the middle ear. The procedure is usually considered when a perforation does not heal on its own or when non-surgical treatment has not helped. A graft (often from the patient’s own tissue, such as temporalis fascia or cartilage) is used to close the hole. The operation may be done under general or local anaesthesia and can be combined with ossiculoplasty (repair of the small bones in the middle ear) if they are damaged. Recovery typically takes a few weeks; patients are advised to keep the ear dry and avoid activities that could affect healing.',
      },
      {
        heading: 'Types of tympanoplasty',
        body: 'The type of operation depends on the extent of damage and which structures are involved:',
        list: [
          'Type I (myringoplasty): the simplest form; only the eardrum is repaired.',
          'Type II: repair of the eardrum and the ossicles (small bones) when they are damaged.',
          'Type III: more extensive repair of the middle ear and ossicles.',
          'Type IV and V: more complex operations involving middle ear and ossicular reconstruction.',
        ],
      },
      {
        heading: 'Diagnosis',
        body: 'Diagnosis usually starts with a medical history and physical examination. You may have symptoms such as hearing loss, ear pain, tinnitus (ringing in the ears), or recurrent ear infections. The specialist will examine the eardrum with an otoscope and assess the size of the perforation. Further tests may include: audiometry (a hearing test to measure the degree of hearing loss and whether it is conductive or sensorineural); tympanometry (to measure how the eardrum moves with changes in air pressure and to check for fluid or other problems); and in complex cases, CT or MRI to see the extent of damage or to rule out conditions such as cholesteatoma. Once the diagnosis is clear, the specialist will discuss whether tympanoplasty is the right option for you.',
      },
      {
        heading: 'Alternatives to tympanoplasty',
        body: 'Depending on your condition, other options may be considered: watchful waiting (small perforations sometimes heal on their own; you may be monitored for healing or complications); medications (antibiotic eardrops or oral antibiotics to prevent or treat infection—medication alone cannot repair the eardrum); patch myringoplasty (a small patch placed over the perforation to encourage healing, used for minor perforations and sometimes requiring more than one application); and hearing aids (for people who are not suitable for surgery or prefer not to have it). These alternatives are not always as effective in the long term as tympanoplasty; the decision should be made with your specialist.',
      },
      {
        heading: 'Risks and consequences',
        body: 'Tympanoplasty is generally safe and successful, but as with any operation there are risks: infection at the operative site (antibiotics are often given to reduce this); bleeding (some bleeding is common; heavy bleeding should be reported); hearing loss (in some cases surgery can result in further hearing loss, especially if the inner ear or auditory nerve is injured); tinnitus (ringing in the ear, which may be temporary or permanent); graft failure (the graft may not heal, leaving a perforation that might need another operation); dizziness or vertigo (the inner ear is linked to balance—usually temporary); and scarring (scar tissue may form and sometimes affect hearing or need further treatment). Most patients who have tympanoplasty experience better hearing and fewer ear infections.',
      },
      {
        heading: 'Recovery after tympanoplasty',
        body: 'You may go home on the day of surgery or the next day. Discomfort and pain in the first few days are common and can be managed with painkillers. The ear may be dressed or packed with gauze, which is removed at a follow-up visit. In the first week: avoid heavy lifting, bending over, and strenuous activity to avoid pressure changes in the ear; keep the ear dry—do not swim or let water into the ear. Most people are back to normal activity within 2–3 weeks, but full recovery can take several months and hearing may improve gradually over weeks. Avoid flying or scuba diving until your specialist says it is safe. Attend follow-up visits to monitor healing and manage any complications. Protect the ear from trauma and infection to reduce the risk of another perforation.',
      },
    ],
    faq: [
      { q: 'How long does tympanoplasty surgery take?', a: 'Tympanoplasty typically takes about 1 to 2 hours, depending on the type of operation and whether other procedures (e.g. ossiculoplasty) are done at the same time.' },
      { q: 'Is tympanoplasty painful?', a: 'Most patients have some pain or discomfort after surgery, which can usually be managed with pain relief prescribed by your surgeon.' },
      { q: 'How successful is tympanoplasty?', a: 'Success rates are high in most cases; many patients notice improvement in hearing and fewer ear infections. Success depends on the extent of damage and your general health.' },
      { q: 'Can children have tympanoplasty?', a: 'Yes. Children can have tympanoplasty if they have a perforated eardrum that causes hearing loss or recurrent infection. Suitability depends on age, overall health, and the severity of the condition.' },
      { q: 'Can a perforated eardrum heal without surgery?', a: 'Small perforations sometimes close on their own. Chronic or larger perforations are usually treated with surgery to close the eardrum and improve hearing.' },
      { q: 'When can I fly after tympanoplasty?', a: 'It is generally recommended to avoid flying for at least 4–6 weeks after surgery to allow the eardrum to heal. Your surgeon will advise you.' },
    ],
    metaDescription: 'Eardrum repair surgery (tympanoplasty) for perforated eardrum. Restore hearing and reduce infections. Book a consultation.',
  },
  {
    slug: 'gall-bladder-surgery-cholecystectomy',
    title: 'Gallbladder surgery (Cholecystectomy)',
    metaTitle: 'Gallbladder surgery (Cholecystectomy)',
    shortDescription: 'Removal of the gallbladder for gallstones or gallbladder disease. Laparoscopic (keyhole) or open surgery with clear recovery guidance.',
    image: '/assets/images/case-common.png',
    href: '/surgery/gall-bladder-surgery-cholecystectomy',
    sections: [
      {
        heading: 'What is the gallbladder and why remove it?',
        body: 'The gallbladder is a small, pouch-like organ in the upper right part of your abdomen. It stores bile—a fluid made by the liver that helps break down fatty foods. You do not need a gallbladder to live normally, so surgery to remove it is often recommended when it causes problems. The most common reason for removal is painful gallstones. Gallstones form when there is an imbalance in the substances that make up bile (acute cholecystitis). They often cause no symptoms and you may not know you have them, but they can block the flow of bile and inflame the gallbladder or pancreas (acute pancreatitis), causing sudden intense abdominal pain, feeling or being sick, and sometimes yellowing of the skin and whites of the eyes (jaundice). Very occasionally medicine can be used to try to dissolve gallstones, but in the vast majority of cases surgery to remove the gallbladder is the most effective treatment.',
      },
      {
        heading: 'What happens during gallbladder removal surgery?',
        body: 'There are two main ways to remove the gallbladder:',
        list: [
          'Laparoscopic (keyhole) cholecystectomy: several small cuts are made in your abdomen and fine surgical tools and a camera are used to access and remove the gallbladder. You can usually leave hospital sooner, recover faster, and have smaller scars than with open surgery.',
          'Open cholecystectomy: a single larger incision is made in your abdomen to access and remove the gallbladder. It may be used when there is severe inflammation, infection, or scarring.',
        ],
      },
      {
        heading: 'Recovering from gallbladder removal surgery',
        body: 'Recovery from keyhole surgery is usually quick: some people leave hospital the same day or the next morning, and you will often be able to return to most normal activities within about 2 weeks. Open surgery takes longer: you may need to stay in hospital for 3 to 5 days and it can take 6 to 8 weeks before you are fully back to normal. We give you clear instructions on pain relief, wound care, and activity.',
      },
      {
        heading: 'Living without a gallbladder',
        body: 'You can lead a normal life without a gallbladder. Your liver still makes enough bile to digest your food; instead of being stored in the gallbladder, it flows continuously into your digestive system. You may have been advised to eat a certain diet before surgery, but afterward you can aim for a generally healthy, balanced diet. Many people have some bloating or diarrhoea after the operation; this usually improves within a few weeks. If you notice that certain foods or drinks trigger these symptoms, you can avoid them.',
      },
      {
        heading: 'Risks of gallbladder removal surgery',
        body: 'Gallbladder removal is generally a safe procedure, but as with any surgery there are risks. Possible complications include wound infection, bile leaking into the abdomen, damage to the bile ducts carrying bile from the liver, and blood clots. We discuss the benefits and risks with you before your operation.',
      },
    ],
    faq: [
      { q: 'Can I live normally without a gallbladder?', a: 'Yes. Your liver still produces bile; it simply flows continuously into your digestive system. Most people need no long-term dietary restrictions.' },
      { q: 'Will I need a special diet after surgery?', a: 'After surgery you can aim for a normal, balanced diet. If certain foods cause bloating or diarrhoea, you can avoid them; many people find symptoms improve over time.' },
      { q: 'How long is recovery?', a: 'After keyhole surgery many people go home within a day or two and return to most activities within about 2 weeks. Open surgery may mean a longer stay and several weeks before full recovery.' },
    ],
    metaDescription: 'Gallbladder surgery (cholecystectomy) for gallstones and gallbladder disease. Laparoscopic and open options. Book a consultation.',
  },
  {
    slug: 'radical-nephrectomy-kidney-removal-surgery',
    title: 'Kidney removal surgery (Radical nephrectomy)',
    metaTitle: 'Kidney removal surgery (Radical nephrectomy)',
    shortDescription: 'Removal of a kidney for cancer, severe trauma, or other conditions. Open or minimally invasive approaches with careful follow-up.',
    image: '/assets/images/case-common.png',
    href: '/surgery/radical-nephrectomy-kidney-removal-surgery',
    sections: [
      {
        heading: 'What is radical nephrectomy?',
        body: 'Radical nephrectomy is removal of an entire kidney together with the surrounding fat (Gerota’s fascia) and sometimes the adjacent adrenal gland and lymph nodes. It is most often performed for kidney cancer (e.g. renal cell carcinoma, Wilms tumour in children) but may also be needed for severe kidney trauma, polycystic kidney disease with pain or infection, a non-functioning or severely diseased kidney, or as part of preparation for a kidney transplant. The remaining kidney usually compensates so that dialysis is not needed, but lifelong follow-up is important to protect kidney function.',
      },
      {
        heading: 'When is kidney removal needed?',
        body: 'Indications include:',
        list: [
          'Kidney cancer: large or invasive tumours, or cancer that has spread beyond the kidney.',
          'Severe trauma: irreparable damage from blunt or penetrating injury (e.g. road traffic accident, stab or gunshot wound).',
          'Polycystic kidney disease: when cysts cause severe pain, recurrent infection, or progression to kidney failure.',
          'Non-functioning or severely diseased kidney: chronic infection, large stones, or congenital abnormality causing pain, high blood pressure, or recurrent infection.',
          'Preparation for transplant: removal of a diseased kidney when the other is healthy enough to work alone or when a transplant is planned.',
        ],
      },
      {
        heading: 'Surgical approaches',
        body: 'Open nephrectomy uses a single large incision (often 8–12 inches) and gives direct access to the kidney; it may be chosen for very large tumours or when surrounding structures need to be removed. Laparoscopic nephrectomy uses several small incisions and a camera; recovery is often faster with less pain and a shorter stay. Robotic-assisted nephrectomy offers enhanced precision and may reduce blood loss. The choice depends on tumour size, anatomy, your general health, and the surgeon’s experience. Before surgery, imaging (e.g. CT, MRI), blood tests, and sometimes a biopsy are used to plan the operation.',
      },
      {
        heading: 'Recovery and life with one kidney',
        body: 'Most people recover within 4 to 6 weeks (often 2–4 weeks after laparoscopic or robotic surgery). You will be advised to avoid heavy lifting and strenuous activity for a period. The remaining kidney usually enlarges slightly (compensatory hypertrophy) and takes over filtration. To protect it: stay well hydrated, eat a balanced diet low in excess salt and processed foods, control blood pressure, and attend regular follow-up to check kidney function. Dialysis is not usually needed unless the other kidney is already damaged (e.g. by diabetes or hypertension) or complications occur.',
      },
    ],
    faq: [
      { q: 'Can I live normally with one kidney?', a: 'Yes. Most people lead a normal, active life with one kidney. We advise on diet, fluid intake, blood pressure control, and avoiding contact sports that could injure the remaining kidney.' },
      { q: 'Will I need dialysis after nephrectomy?', a: 'Usually not. The remaining kidney typically takes over. Dialysis may be needed if the other kidney is already diseased or if complications affect its function; we assess this before and after surgery.' },
      { q: 'What are the risks?', a: 'Risks include bleeding, infection, injury to nearby organs, blood clots, and pneumonia. Long-term, there is an increased risk of chronic kidney disease, so we monitor your kidney function and blood pressure regularly.' },
    ],
    metaDescription: 'Kidney removal surgery (radical nephrectomy) for kidney cancer and other conditions. Expert evaluation and care. Book a consultation.',
  },
  {
    slug: 'weight-reduction-surgery-bariatric',
    title: 'Weight loss surgery (Bariatric surgery)',
    metaTitle: 'Weight loss surgery (Bariatric surgery)',
    shortDescription: 'Bariatric surgery for significant, sustained weight loss when diet and lifestyle have not been enough. Gastric sleeve, bypass and other options.',
    image: '/assets/images/case-common.png',
    href: '/surgery/weight-reduction-surgery-bariatric',
    sections: [
      {
        heading: 'What is bariatric surgery?',
        body: 'Bariatric (weight loss) surgery changes the stomach and sometimes the intestines to limit how much you can eat and, in some procedures, how much you absorb. It is considered when obesity is affecting your health and other treatments have not worked. Common types include gastric bypass (smaller stomach pouch plus rerouted intestine), gastric sleeve (most of the stomach removed, leaving a sleeve), adjustable gastric banding (band around the stomach that can be tightened or loosened), and biliopancreatic diversion with duodenal switch (more extensive restriction and malabsorption). The best option depends on your weight, health conditions, and goals—we can refer you to a specialist team for assessment.',
      },
      {
        heading: 'Who is it for and what are the benefits?',
        body: 'Surgery is usually offered to adults with a body mass index (BMI) of 40 or more, or BMI 35–40 with obesity-related conditions such as type 2 diabetes, high blood pressure, or sleep apnoea. Benefits include substantial and often sustained weight loss, improvement or remission of type 2 diabetes in many patients, better blood pressure and cholesterol, reduced sleep apnoea, and improved quality of life. It is a major operation and requires a lifelong commitment to diet, vitamins, and follow-up.',
      },
      {
        heading: 'Risks and complications',
        body: 'As with any major surgery, there are risks: infection, bleeding, reaction to anaesthesia, blood clots, and leaks from the stomach or intestine. Longer-term complications can include gallstones (especially with rapid weight loss), nutritional deficiencies (vitamins and minerals), dumping syndrome (nausea, dizziness after eating sugary or fatty foods), narrowing at the connection between stomach and intestine (stomal stenosis), and ulcers. Regular follow-up with your surgical and dietetic team helps prevent and manage these. Pre-operative assessment and education are essential to prepare you and reduce risks.',
      },
      {
        heading: 'Recovery and diet after surgery',
        body: 'You will start with liquids, then purees and soft foods, then gradually solid foods in small portions. Eating too quickly or too much can cause discomfort or vomiting. We advise lean protein, vegetables, fruits, whole grains, plenty of water (not with meals), and avoiding high-calorie, sugary, and carbonated drinks. Small, frequent meals and lifelong vitamin and mineral supplementation are standard. Physical activity is encouraged as you recover. Follow-up appointments are needed to monitor weight, nutrition, and any complications.',
      },
    ],
    faq: [
      { q: 'Is bariatric surgery safe?', a: 'It is a major operation with real risks, but in suitable patients with good preparation and follow-up, it is generally safe and very effective for weight loss and improving obesity-related diseases.' },
      { q: 'How much weight will I lose?', a: 'Weight loss varies by procedure and individual. Many people lose a significant amount of excess weight in the first 1–2 years. Long-term success depends on diet, activity, and follow-up.' },
      { q: 'Will I need to take vitamins forever?', a: 'Yes. After bypass or malabsorptive procedures, lifelong supplementation with vitamins (e.g. B12, folate) and minerals (e.g. iron, calcium) is usually required to prevent deficiency.' },
    ],
    metaDescription: 'Weight loss surgery (bariatric surgery). Gastric sleeve, bypass and other options. Expert assessment and care. Book a consultation.',
  },
  {
    slug: 'amputation-surgery',
    title: 'Amputation surgery',
    metaTitle: 'Amputation surgery',
    shortDescription: 'Surgery to remove part or all of a limb when necessary for severe infection, circulation problems, trauma, or cancer. Care and rehabilitation support.',
    image: '/assets/images/case-common.png',
    href: '/surgery/amputation-surgery',
    sections: [
      {
        heading: 'What is amputation?',
        body: 'Amputation is surgery to remove all or part of a limb or extremity—for example an arm, leg, hand, foot, or digit. The most common reason is poor blood supply (peripheral arterial disease): without enough blood flow, tissues cannot get oxygen and nutrients, so the affected part may die and become infected. Other reasons include severe trauma (e.g. from an accident or burn), a cancerous tumour in the bone or muscle of the limb, severe infection that does not respond to antibiotics, frostbite, and thickening of nerve tissue (neuroma) causing intractable pain. The aim is to remove diseased or non-viable tissue while preserving as much healthy tissue as possible and shaping the stump so it can be fitted with a prosthesis if appropriate.',
      },
      {
        heading: 'The procedure and planning the level',
        body: 'Amputation is performed under general or spinal anaesthesia. The surgeon removes damaged tissue and any diseased bone, smooths bone edges, seals blood vessels and nerves, and shapes muscles and skin so the stump can heal and, if applicable, support a prosthetic limb. The wound may be closed immediately (closed amputation) or left open for a few days if further tissue needs to be removed. The level of amputation is decided by checking blood supply (pulse, skin temperature, sensitivity) and the extent of disease or injury. You may stay in hospital for around two weeks or more depending on healing and rehabilitation needs.',
      },
      {
        heading: 'Risks and support',
        body: 'Risks include bleeding, infection, wound breakdown, and blood clots. Phantom limb sensation or pain is common and can often be improved with medication, physiotherapy, or other therapies. Emotional and psychological support is important—coping with the loss of a limb can be difficult. We work with physiotherapy, prosthetic services, and counselling to support your recovery, mobility, and independence. Early involvement of the rehabilitation team helps you prepare for life after amputation.',
      },
      {
        heading: 'Recovery and rehabilitation',
        body: 'After surgery, the wound is dressed and monitored. Pain is managed with medication; some people experience phantom pain (sensation or pain in the missing limb), which can be treated with drugs or other therapies. Physical therapy usually starts early with gentle stretching and strengthening. Fitting and training with an artificial limb (prosthesis) may begin within about 10–14 days in some cases. Full wound healing often takes 4–8 weeks. Long-term rehabilitation includes building strength and mobility, emotional support and counselling to adjust to the loss of the limb, and learning to use prostheses and other aids for daily activities and independence.',
      },
    ],
    faq: [
      { q: 'What happens after amputation?', a: 'Recovery includes wound care, pain control (including for phantom pain), and rehabilitation. We work with physiotherapy and prosthetic services to support your mobility and independence.' },
      { q: 'Can I use a prosthetic limb?', a: 'Many people are candidates for a prosthesis. Timing and type depend on the level of amputation, healing, and your general health. Your team will refer you to specialists for assessment and fitting.' },
      { q: 'How long until I can go home?', a: 'Hospital stay varies; it may be around two weeks or more depending on healing, pain control, and how quickly you can start rehabilitation and mobility training.' },
      { q: 'What is phantom pain?', a: 'Phantom pain or sensation is when you feel the missing limb as if it were still there. It is common and usually improves with time. Medication and other therapies can help; we can refer you for specialist support if needed.' },
    ],
    metaDescription: 'Amputation surgery when limb salvage is not possible. Expert care and rehabilitation support. Book a consultation.',
  },
  {
    slug: 'prostate-removal-surgery-prostatectomy',
    title: 'Prostate removal surgery (Prostatectomy)',
    metaTitle: 'Prostate removal surgery (Prostatectomy)',
    shortDescription: 'Surgical removal of the prostate for cancer or severe enlargement. Open, laparoscopic and robotic-assisted options with clear aftercare.',
    image: '/assets/images/case-common.png',
    href: '/surgery/prostate-removal-surgery-prostatectomy',
    sections: [
      {
        heading: 'What is prostatectomy?',
        body: 'The prostate is a small gland below the bladder that produces fluid for semen. Prostatectomy is surgery to remove part or all of the prostate. It is used mainly to treat localised prostate cancer and sometimes severe benign prostatic hyperplasia (BPH) when other treatments have failed. Types include radical prostatectomy (removal of the whole gland, often with nearby lymph nodes, for cancer), simple prostatectomy (removal of the inner part of the gland for BPH to relieve urinary symptoms), and laparoscopic or robotic-assisted prostatectomy (minimally invasive approaches that may reduce blood loss and speed recovery).',
      },
      {
        heading: 'Symptoms and diagnosis',
        body: 'Prostate cancer may cause difficulty urinating, blood in the urine or semen, frequent urination (especially at night), pain on urination or ejaculation, or pain in the back, hips, or pelvis. BPH causes similar urinary symptoms: frequency, urgency, weak stream, incomplete emptying, and dribbling. Diagnosis is made with a digital rectal examination (DRE), prostate-specific antigen (PSA) blood test, and often a prostate biopsy. Imaging (e.g. MRI, CT) may be used to stage cancer. We can refer you to a urologist for full assessment and to discuss whether surgery is the right option.',
      },
      {
        heading: 'The procedure and aftercare',
        body: 'Radical prostatectomy can be done by open surgery, laparoscopy, or robot-assisted laparoscopy. The prostate and sometimes nearby lymph nodes are removed; the bladder is reconnected to the urethra. A urinary catheter stays in place for about 1–2 weeks. You will be encouraged to move soon after surgery to reduce the risk of blood clots. Pelvic floor (Kegel) exercises can be started before or soon after surgery to support urinary control. Avoid heavy lifting and strenuous activity for at least six weeks. Your urologist will advise on driving, return to work, and when you can resume sexual activity. Follow-up checks include wound healing, catheter removal, and—if done for cancer—PSA tests to monitor for recurrence.',
      },
      {
        heading: 'Risks and recovery',
        body: 'Possible effects of prostatectomy include urinary incontinence (temporary or long-term—improved with pelvic floor exercises), erectile dysfunction (depends on age, nerve preservation, and type of surgery), infertility (semen is no longer produced), and changes in orgasm (e.g. dry orgasm). There are also general surgical risks such as bleeding, infection, and blood clots. Recovery typically involves 1–3 days in hospital, a urinary catheter for 1–2 weeks, and avoiding heavy lifting and strenuous activity for at least six weeks. Follow-up is important to monitor healing, urinary function, and, if done for cancer, PSA levels to check for recurrence.',
      },
    ],
    faq: [
      { q: 'Will I be incontinent after prostatectomy?', a: 'Some men have temporary or lasting leakage of urine. Pelvic floor (Kegel) exercises and sometimes further treatment can help. We discuss this before surgery and support you during recovery.' },
      { q: 'Will I still be able to have sex?', a: 'Erectile function can be affected because nerves that run near the prostate may be damaged. Recovery varies; some men improve with time or with treatment. We can refer you for advice and support.' },
      { q: 'How often will I need follow-up?', a: 'If surgery was for cancer, PSA is usually checked every 3–6 months for the first years. We also monitor urinary function and any new symptoms. Your urologist will give you a schedule.' },
      { q: 'How long is the hospital stay?', a: 'Many men go home within 1–3 days after laparoscopic or robotic prostatectomy. Open surgery may require a slightly longer stay. Your urologist will advise based on your recovery.' },
    ],
    metaDescription: 'Prostate removal surgery (prostatectomy) for prostate cancer and BPH. Expert evaluation and care. Book a consultation.',
  },
  {
    slug: 'root-canal-treatment',
    title: 'Root canal treatment',
    metaTitle: 'Root canal treatment',
    shortDescription: 'Dental procedure to save a tooth with infected or damaged pulp. Removes infection and seals the root canal to preserve the tooth.',
    image: '/assets/images/case-common.png',
    href: '/surgery/root-canal-treatment',
    sections: [
      {
        heading: 'What is root canal treatment?',
        body: 'Root canal treatment (endodontic therapy) is a dental procedure to save a tooth whose pulp (the soft tissue inside the tooth containing nerves and blood vessels) is infected or damaged. The dentist or endodontist removes the diseased pulp, cleans and shapes the root canals, and seals them with a rubber-like material (gutta-percha). This relieves pain, stops the spread of infection, and allows the tooth to remain in place and function normally. A filling or crown is usually placed afterward to protect the tooth.',
      },
      {
        heading: 'Causes and symptoms',
        body: 'The most common cause is tooth decay that has reached the pulp. Other causes include trauma (crack, chip, or fracture), repeated dental work on the tooth, and advanced gum disease exposing the roots. Symptoms include severe toothache (especially when chewing or with pressure), prolonged sensitivity to hot or cold, darkening of the tooth, swelling or tenderness of the gums, a pimple-like bump on the gum that may drain pus, and sometimes fever or feeling unwell. Some teeth with pulp damage cause no symptoms and are picked up on examination or X-ray—so regular check-ups are important.',
      },
      {
        heading: 'What happens during treatment?',
        body: 'The tooth is numbed with local anaesthesia. A rubber dam is placed to keep the tooth dry and clean. The dentist makes a small opening in the tooth to reach the pulp chamber and root canals, then uses fine instruments and disinfectant to remove the infected pulp and shape the canals. The canals are filled with gutta-percha and sealed. A temporary or permanent filling closes the opening; a crown is often recommended to strengthen the tooth. The procedure may take one or more visits depending on complexity. Without treatment, infection can spread, cause an abscess, and may lead to loss of the tooth or serious illness.',
      },
      {
        heading: 'Aftercare',
        body: 'Avoid chewing on the treated tooth until it is fully restored. Brush and floss normally; rinse with warm salt water or an antiseptic mouthwash if advised. Take any prescribed medication. Attend follow-up to complete the restoration (filling or crown) and to check that the tooth and surrounding bone are healing. Avoid smoking and limit hard, sticky, or sugary foods that could damage the tooth or restoration.',
      },
    ],
    faq: [
      { q: 'Is root canal treatment painful?', a: 'The procedure is done under local anaesthesia, so you should not feel pain during it. Some soreness afterward is common and can be managed with over-the-counter or prescribed pain relief.' },
      { q: 'Can the tooth last after root canal?', a: 'With a proper filling or crown and good oral care, a root-filled tooth can last many years and function like any other tooth. We advise on follow-up and when to see your dentist.' },
      { q: 'What if I don’t have treatment?', a: 'Infection can spread, cause an abscess, and damage the bone around the root. In severe cases it can lead to serious illness. The tooth may eventually need to be removed.' },
    ],
    metaDescription: 'Root canal treatment to save an infected or damaged tooth. Referral to expert dental care. Book a consultation.',
  },
  {
    slug: 'cataract-eye-surgery',
    title: 'Cataract surgery',
    metaTitle: 'Cataract surgery',
    shortDescription: 'Surgery to remove a cloudy lens (cataract) and restore clear vision. Safe, common procedure with quick recovery for most people.',
    image: '/assets/images/case-common.png',
    href: '/surgery/cataract-eye-surgery',
    sections: [
      {
        heading: 'What is a cataract?',
        body: 'A cataract is clouding of the eye’s natural lens, which normally focuses light onto the retina so you can see clearly. With a cataract, vision becomes blurry, hazy, or less colourful—like looking through a foggy or dusty window. Most cataracts are age-related (the lens tissue changes over time); other causes include trauma, certain medications (e.g. long-term steroids), diabetes, and other eye diseases. The only way to remove a cataract is surgery. Your ophthalmologist will recommend surgery when the cataract is affecting activities you need or want to do (e.g. reading, driving, recognising faces).',
      },
      {
        heading: 'What happens during cataract surgery?',
        body: 'The cloudy natural lens is removed and replaced with a clear artificial lens (intraocular lens, IOL). The most common technique is phacoemulsification: small incisions are made near the cornea, an ultrasound probe breaks up the lens, and it is suctioned out before the new lens is inserted. The procedure is usually done under local anaesthesia (drops or injection around the eye); you are awake but should not feel pain. It often takes 30–45 minutes and is commonly done as a day case. The incisions usually seal without stitches. A shield is placed over the eye to protect it while it heals.',
      },
      {
        heading: 'Diagnosis and when to have surgery',
        body: 'Cataracts are detected during a routine eye examination. Your ophthalmologist will check your vision, examine the lens with a slit lamp, and may dilate your pupils to see the back of the eye and rule out other conditions. Surgery is recommended when the cataract is affecting your daily life—for example reading, driving, watching television, or recognising faces—or when it is making it harder to examine or treat other eye problems (e.g. diabetic retinopathy). There is no need to wait until the cataract is “ripe”; modern surgery can be done at any stage when you and your doctor agree the time is right.',
      },
      {
        heading: 'Recovery and prevention',
        body: 'Many people notice improved vision within days; full stabilisation can take a few weeks. You will use eye drops to prevent infection and reduce inflammation and may need to avoid rubbing the eye, heavy lifting, and swimming for a short period. Cataracts cannot be reversed without surgery, but you may reduce the risk of developing or worsening them by having regular eye exams, not smoking, managing conditions such as diabetes, wearing sunglasses that block UV light, and eating a diet rich in fruits and vegetables. We can refer you to an ophthalmologist for assessment and surgery.',
      },
    ],
    faq: [
      { q: 'Is cataract surgery painful?', a: 'The operation is done under local anaesthesia, so you should not feel pain during it. Some mild discomfort or itching afterward is common and can be managed with prescribed drops or pain relief.' },
      { q: 'Can cataracts come back?', a: 'The removed lens does not grow back. In some people the capsule that holds the new lens can later become cloudy (posterior capsule opacification), which can be treated with a quick laser procedure (YAG capsulotomy).' },
      { q: 'How long until I can drive and work?', a: 'Your ophthalmologist will advise based on your vision and the type of work you do. Many people can resume normal activities within a few days to a couple of weeks.' },
      { q: 'When is the right time for cataract surgery?', a: 'Surgery is recommended when the cataract is affecting your quality of life or your ability to do things you need or want to do. You do not have to wait until vision is very poor; your ophthalmologist will help you decide the best timing.' },
    ],
    metaDescription: 'Cataract surgery to restore clear vision. Referral to expert eye care. Book a consultation.',
  },
  {
    slug: 'glaucoma-eye-surgery',
    title: 'Glaucoma surgery',
    metaTitle: 'Glaucoma surgery',
    shortDescription: 'Surgery to lower eye pressure and slow glaucoma. Options include laser and conventional surgery to protect vision.',
    image: '/assets/images/case-common.png',
    href: '/surgery/glaucoma-eye-surgery',
    sections: [
      {
        heading: 'What is glaucoma?',
        body: 'Glaucoma is a group of eye diseases that damage the optic nerve—the nerve that carries visual information from the eye to the brain. The damage is often linked to raised pressure inside the eye (intraocular pressure, IOP) when the fluid (aqueous humour) does not drain properly. Over time, glaucoma can cause loss of peripheral vision, tunnel vision, and eventually blindness if untreated. It is sometimes called the “silent thief of sight” because there are often no early symptoms. Glaucoma is a significant cause of blindness; early detection and treatment can slow or halt its progression. People over 40, those with a family history, and people of African heritage are at higher risk.',
      },
      {
        heading: 'Diagnosis and treatment options',
        body: 'Diagnosis is made with tests that measure eye pressure (tonometry), examine the optic nerve (ophthalmoscopy), check the visual field (perimetry), and assess the drainage angle (gonioscopy). Treatment aims to lower IOP. First-line treatment is usually medicated eye drops. When drops or laser are not enough, or when the disease is advanced, surgery may be recommended. Options include laser trabeculoplasty (to improve drainage), laser iridotomy (for angle-closure glaucoma), and conventional surgery such as trabeculectomy or drainage devices (shunts) to create a new drainage pathway. Glaucoma cannot be cured—damage already done cannot be reversed—but treatment can help preserve remaining vision.',
      },
      {
        heading: 'When is surgery considered?',
        body: 'Surgery is considered when eye pressure remains too high despite drops and laser, when the disease is progressing, or when the patient cannot use or tolerate drops. Your ophthalmologist will explain the risks and benefits and the best option for your type and stage of glaucoma. We can refer you to an ophthalmologist for assessment and treatment.',
      },
      {
        heading: 'Recovery and follow-up',
        body: 'After laser treatment, you may have mild discomfort or blurred vision for a short time; you can usually go home the same day. After trabeculectomy or drainage device surgery, you will use eye drops for several weeks to help healing and prevent infection. Your ophthalmologist will check your eye pressure and the appearance of the eye regularly. It is important to attend all follow-up visits and to continue any remaining eye drops as prescribed. Glaucoma is a lifelong condition—treatment does not cure it but helps preserve your remaining vision. We can refer you to an ophthalmologist and support you with ongoing care.',
      },
    ],
    faq: [
      { q: 'Can glaucoma be cured?', a: 'No. Glaucoma cannot be cured and vision lost to it cannot be restored. Treatment (drops, laser, or surgery) aims to lower pressure and slow or stop further damage.' },
      { q: 'What does glaucoma surgery involve?', a: 'Laser treatments are quick and often done in the clinic. Conventional surgery (e.g. trabeculectomy) creates a new channel for fluid to leave the eye. Your ophthalmologist will explain the procedure and recovery for your case.' },
      { q: 'Who is at higher risk of glaucoma?', a: 'People over 40, those with a family history, people of African descent, and people with diabetes or high blood pressure. Regular eye checks are important for early detection.' },
      { q: 'How often do I need check-ups after glaucoma surgery?', a: 'You will need regular follow-up to check eye pressure and the health of the optic nerve. Your ophthalmologist will give you a schedule; many people need visits every few months, especially in the first year.' },
    ],
    metaDescription: 'Glaucoma surgery to lower eye pressure and protect vision. Referral to expert eye care. Book a consultation.',
  },
  {
    slug: 'fibroid-removal-surgery',
    title: 'Fibroid treatment & surgery',
    metaTitle: 'Fibroid treatment & surgery',
    shortDescription: 'Evaluation and treatment for uterine fibroids—from monitoring to myomectomy or hysterectomy when needed. Personalised care and follow-up.',
    image: '/assets/images/case-common.png',
    href: '/surgery/fibroid-removal-surgery',
    sections: [
      {
        heading: 'What are fibroids?',
        body: 'Fibroids are non-cancerous growths that develop within the muscular wall of the uterus. They are very common—affecting a large proportion of women at some point—and vary in size, location, and the symptoms they cause. Understanding their causes, symptoms, diagnosis, and treatment options is essential for managing their impact on health.',
      },
      {
        heading: 'Causes and risk factors',
        body: 'The exact cause of fibroids is unknown. Factors that may increase the risk include: hormonal factors (oestrogen and progesterone, which affect the uterine lining, can encourage fibroid growth); genetic factors (fibroids often run in families); and other risk factors such as age (women in their thirties and forties are more likely to have fibroids), ethnicity (some groups have a higher risk and more severe symptoms), low physical activity, a diet heavy in red meat, obesity, not having had children, and early menarche. Growth factors and the way cells are held together in the uterus may also play a role.',
      },
      {
        heading: 'Types of fibroids',
        body: 'Based on where they sit in the uterus, fibroids are often classified as:',
        list: [
          'Intramural fibroids: the most common type; they develop inside the muscular wall of the uterus and may make the uterus appear enlarged.',
          'Subserosal fibroids: grow on the outer surface of the uterus into the pelvic cavity; they can become large and press on nearby organs.',
          'Submucosal fibroids: grow just under the inner lining of the uterus (endometrium) and can bulge into the uterine cavity; they are less common but can cause heavy menstrual bleeding and fertility problems.',
          'Pedunculated fibroids: attached to the uterine wall by a narrow stalk; they can be subserosal or submucosal and may twist and cause severe pain.',
        ],
      },
      {
        heading: 'Symptoms of fibroids',
        body: 'Symptoms depend on the size, number, and location of fibroids. Many women have no symptoms; others have: heavy or prolonged menstrual bleeding (which can lead to anaemia); pelvic pain or pressure and a feeling of fullness in the pelvis; frequent urination (from pressure on the bladder); constipation or difficulty passing stool (from pressure on the rectum); backache or leg pain (from pressure on nerves or muscles); and reproductive problems such as infertility or repeated miscarriages when submucosal fibroids affect implantation. We assess your symptoms and scans to recommend the best treatment.',
      },
      {
        heading: 'Diagnosis of fibroids',
        body: 'Fibroids are often first seen during a pelvic exam or pregnancy ultrasound. To confirm the diagnosis and assess size, number, and position, the doctor may use: ultrasound (sound waves to image the uterus); MRI (detailed images of the uterus); hysterosonography (saline infused into the uterus during ultrasound to show submucosal fibroids); hysterosalpingography (X-ray with contrast in the uterus and fallopian tubes to check for blockages and fibroids); and hysteroscopy (a thin telescope passed through the cervix to view and sometimes remove submucosal fibroids). We can refer you to a gynaecologist for these tests and for treatment.',
      },
      {
        heading: 'Treatment options for fibroids',
        body: 'Treatment depends on the severity of symptoms, the size and location of the fibroids, your age, and whether you wish to preserve fertility. Options include: watchful waiting (especially if you are near menopause and have few or no symptoms); medication (hormonal treatments, IUDs, or drugs such as tranexamic acid to reduce bleeding—drugs can control symptoms but do not remove fibroids); minimally invasive procedures (uterine artery embolisation to cut off blood supply to fibroids, or focused ultrasound to heat and shrink them; myomectomy—surgical removal of fibroids while keeping the uterus—can be done by open surgery, laparoscopy, or hysteroscopy); and hysterectomy (removal of the uterus) when other treatments have failed or fibroids are very large. We can refer you to a gynaecologist to explore the best option for you.',
      },
      {
        heading: 'Fibroids and fertility',
        body: 'Fibroids can affect fertility and pregnancy. Submucosal fibroids can change the shape of the uterine cavity and make it harder for an embryo to implant and for sperm to reach the egg. During pregnancy, fibroids can increase the risk of restricted fetal growth, preterm birth, and placental abruption. Large fibroids can block the birth canal and raise the chance of caesarean delivery. If you want to become pregnant and have fibroids, discuss your options with a gynaecologist so you can choose a treatment that preserves fertility where possible.',
      },
      {
        heading: 'Lifestyle and home remedies',
        body: 'Lifestyle changes cannot remove fibroids but may help control symptoms and improve general health: maintain a healthy weight (excess body fat can raise oestrogen and encourage fibroid growth); eat a balanced diet with plenty of whole grains, fruits, vegetables, and lean protein; take regular exercise; manage stress (e.g. with yoga, mindfulness, or meditation); and if you have heavy periods, include iron-rich foods to help prevent anaemia. We can advise on what might help in your case.',
      },
    ],
    faq: [
      { q: 'Are fibroids cancerous?', a: 'The vast majority of fibroids are benign (non-cancerous). In rare cases—less than 1%—a fibroid can be or become a cancerous tumour (leiomyosarcoma). Your doctor will discuss any concerns based on your history and scans.' },
      { q: 'How are fibroids diagnosed?', a: 'Fibroids are diagnosed through a combination of pelvic examination, ultrasound, and sometimes MRI or hysteroscopy. Your healthcare provider will choose the right tests based on your symptoms and history.' },
      { q: 'Can lifestyle changes help manage fibroids?', a: 'Lifestyle changes cannot remove fibroids but may help manage symptoms. A balanced diet, regular exercise, stress management, and a healthy weight can improve wellbeing and may ease fibroid-related symptoms.' },
      { q: 'Can I have children after fibroid surgery?', a: 'Myomectomy removes fibroids but keeps the uterus, so pregnancy is still possible. Your gynaecologist will explain the best option if you want to preserve fertility.' },
    ],
    metaDescription: 'Fibroid treatment and surgery. Myomectomy and other options. Referral to expert gynaecological care. Book a consultation.',
  },
  {
    slug: 'in-vitro-fertilisation-ivf',
    title: 'IVF (In-vitro fertilisation)',
    metaTitle: 'IVF (In-vitro fertilisation)',
    shortDescription: 'Information and referral for IVF and fertility care. We can guide you to specialist centres for assessment and treatment.',
    image: '/assets/images/case-common.png',
    href: '/surgery/in-vitro-fertilisation-ivf',
    sections: [
      {
        heading: 'What is IVF?',
        body: 'In-vitro fertilisation (IVF) is a type of assisted reproduction in which eggs are collected from the ovaries and fertilised with sperm in the laboratory. The resulting embryos may be transferred to the uterus (or to a surrogate), or frozen for later use. IVF can use your eggs and your partner’s sperm, donor eggs or sperm, or donated embryos. It is usually considered when other fertility treatments (e.g. medication, intrauterine insemination) have not succeeded, or when there are specific issues such as blocked tubes, low sperm count, endometriosis, or unexplained infertility.',
      },
      {
        heading: 'The IVF process',
        body: 'Steps typically include: (1) Ovarian reserve testing and uterine assessment before starting. (2) Ovarian stimulation with fertility drugs so several eggs develop. (3) Monitoring with blood tests and ultrasound to time egg retrieval. (4) Egg retrieval (follicular aspiration) under sedation or anaesthesia—a needle is guided through the vagina into the ovaries to collect eggs. (5) Sperm is collected and mixed with the eggs (or intracytoplasmic sperm injection, ICSI, may be used if sperm quality is poor). (6) Embryos are cultured and may be tested for genetic conditions. (7) One or more embryos are transferred into the uterus via a thin catheter. Pregnancy is confirmed by a blood test. The process is physically and emotionally demanding; complications can include multiple pregnancy, miscarriage, ectopic pregnancy, and ovarian hyperstimulation syndrome (OHSS).',
      },
      {
        heading: 'How we can help',
        body: 'We do not perform IVF at our practice but can discuss your situation and refer you to reputable fertility specialists and centres for full assessment, counselling, and treatment. Choosing whether to pursue IVF—and how many attempts—is a personal decision; your fertility team will help you understand success rates, costs, and alternatives.',
      },
      {
        heading: 'Success rates and what to expect',
        body: 'Success rates depend on age, cause of infertility, and the clinic. Generally, younger women and those with good ovarian reserve have higher pregnancy rates per cycle. Not every cycle leads to a pregnancy; some people need several attempts. Your fertility specialist will give you personalised information based on your tests and history. After embryo transfer, you will wait about two weeks before a pregnancy test. If the result is positive, early scans confirm the pregnancy and check that it is in the uterus. Emotional support and clear communication with your team are important throughout the process. We can help you find a fertility centre and support you with referrals and follow-up.',
      },
    ],
    faq: [
      { q: 'Who might need IVF?', a: 'IVF may be recommended for blocked or damaged fallopian tubes, reduced ovarian function, endometriosis, uterine fibroids, male infertility (low count or abnormal sperm), unexplained infertility, or when other treatments have failed. A fertility specialist will assess your case.' },
      { q: 'What does the process involve?', a: 'It includes ovarian stimulation, egg retrieval, fertilisation in the lab, embryo culture (and possibly genetic testing), and embryo transfer. Your clinic will explain the steps, timeline, and what to expect at each stage.' },
      { q: 'What are the risks?', a: 'Risks include multiple pregnancy, miscarriage, ectopic pregnancy, OHSS (fluid in abdomen/chest), and rarely infection or bleeding. Your fertility team will monitor you and explain how risks are minimised.' },
      { q: 'How many IVF cycles might I need?', a: 'It varies. Some people conceive in the first cycle; others need two or more. Your fertility specialist will discuss success rates for your situation and what to expect. We can refer you to a centre that will support you through the process.' },
    ],
    metaDescription: 'IVF (in-vitro fertilisation) information and referral to fertility specialists. Book a consultation.',
  },
  {
    slug: 'atrial-septal-defects-asds-heart-surgery',
    title: 'Atrial septal defect (ASD) surgery',
    metaTitle: 'Atrial septal defect (ASD) surgery',
    shortDescription: 'Repair of a hole between the heart’s upper chambers (atria). Catheter-based or open surgery for children and adults.',
    image: '/assets/images/case-congenital.png',
    href: '/surgery/atrial-septal-defects-asds-heart-surgery',
    sections: [
      {
        heading: 'What is an atrial septal defect?',
        body: 'An atrial septal defect (ASD) is a hole in the wall (atrial septum) between the two upper chambers of the heart. Blood can flow from the left to the right atrium, increasing the workload on the right side of the heart and the flow to the lungs. Over time this can lead to enlargement of the right heart, heart failure, arrhythmias (e.g. atrial fibrillation), stroke, or pulmonary hypertension. Small ASDs may close on their own or cause few problems; larger ones usually need repair. There are several types: secundum (most common, in the middle of the septum), primum (lower part, often with other heart defects, including in Down syndrome), sinus venosus (upper or lower back part, sometimes with abnormal pulmonary veins), and unroofed coronary sinus (rare).',
      },
      {
        heading: 'Diagnosis and when repair is needed',
        body: 'ASD may be found on a routine check (e.g. heart murmur) or when symptoms appear: fatigue, shortness of breath, fluid in the lungs or legs, poor growth in children, or recurrent chest infections. Tests include ECG, chest X-ray, and echocardiography (transthoracic and sometimes transoesophageal or intracardiac) to see the size, position, and effect on the heart. Small ASDs with no or mild symptoms may be watched. Moderate or large defects, or those causing symptoms, usually need closure—either by a catheter-placed device (for suitable secundum ASDs) or by open-heart surgery (for primum, sinus venosus, or when device closure is not possible).',
      },
      {
        heading: 'Treatment and recovery',
        body: 'Catheter closure avoids open surgery: a device is passed from a vein in the leg to the heart and used to seal the hole. Open-heart surgery is used for more complex ASDs: the heart is temporarily stopped, the hole is closed with stitches or a patch, and the heart is restarted. Recovery after surgery typically involves 3–4 days in hospital; complications such as bleeding or infection are uncommon. Some children may have pericarditis (inflammation around the heart) in the weeks after surgery, which usually responds to medication. Long-term outlook after repair is generally excellent with regular cardiology follow-up. We can refer you or your child to a cardiologist or cardiac surgeon for assessment and the best option.',
      },
    ],
    faq: [
      { q: 'Can ASD be closed without open surgery?', a: 'Many secundum ASDs can be closed with a catheter-placed device. Primum and sinus venosus defects usually need open-heart surgery. Your cardiologist will determine the best approach.' },
      { q: 'What is the outlook after ASD repair?', a: 'Repair is usually successful with an excellent long-term outlook. Regular follow-up with a cardiologist is recommended to check the heart and rhythm.' },
      { q: 'Is ASD common in children?', a: 'ASD is one of the most common congenital heart defects. It can also be diagnosed in adults who have had no or mild symptoms earlier in life.' },
    ],
    metaDescription: 'Atrial septal defect (ASD) repair. Catheter and surgical options. Referral to cardiac specialists. Book a consultation.',
  },
  {
    slug: 'ventricular-septal-defect-vsd-congenital-heart-disease',
    title: 'Ventricular septal defect (VSD) surgery',
    metaTitle: 'Ventricular septal defect (VSD) surgery',
    shortDescription: 'Repair of a hole between the heart’s lower chambers (ventricles). Surgery when the defect is large or causes symptoms.',
    image: '/assets/images/case-congenital.png',
    href: '/surgery/ventricular-septal-defect-vsd-congenital-heart-disease',
    sections: [
      {
        heading: 'What is a ventricular septal defect?',
        body: 'A ventricular septal defect (VSD) is a hole in the wall between the two lower chambers of the heart (ventricles). It is one of the most common congenital heart defects. Small VSDs may cause no symptoms and sometimes close on their own. Larger VSDs allow extra blood to flow to the lungs and can cause difficulty breathing, poor growth, rapid breathing, pale or bluish skin, frequent chest infections, and heart failure. Without repair, large VSDs can lead to permanent lung damage (pulmonary hypertension) or other complications. Rarely, a VSD can be acquired later in life (e.g. after severe chest trauma).',
      },
      {
        heading: 'Diagnosis and treatment',
        body: 'Diagnosis is based on symptoms, examination (heart murmur), and tests such as echocardiography (including transoesophageal or bubble study) and sometimes MRI. Small VSDs with no symptoms may be watched. Larger VSDs or those causing symptoms usually need closure. Repair is often done with open-heart surgery: the hole is closed with stitches or a patch. In some cases, certain VSDs can be closed with a catheter-placed device. Before surgery, medication (e.g. for heart failure) may be used to stabilise the patient. Surgery has a high success rate and good long-term outcomes; recovery depends on the size of the defect and any other heart problems. We can refer you or your child to a paediatric or adult congenital heart team.',
      },
      {
        heading: 'Causes, risk factors and recovery',
        body: 'VSD is usually present at birth (congenital). The exact cause is often unknown; genetic factors and maternal health in pregnancy can play a role. Risk factors include family history of congenital heart disease and conditions such as Down syndrome. After repair, most children spend a few days in hospital and then recover at home. Wound care, avoiding heavy activity for a period, and follow-up with the cardiologist are important. The outlook is generally excellent; a small number of children need further treatment for residual problems or rhythm issues. We can refer you or your child to a paediatric or adult congenital heart team.',
      },
    ],
    faq: [
      { q: 'Do all VSDs need surgery?', a: 'No. Small VSDs may be watched and sometimes close on their own. Medium or large VSDs, or those causing symptoms or complications, usually need closure by surgery or sometimes a catheter device.' },
      { q: 'Is VSD repair safe?', a: 'VSD repair is a well-established procedure with a high success rate when performed by an experienced team in an appropriate centre.' },
      { q: 'Can adults have VSD?', a: 'Yes. Some people have a VSD that was not diagnosed in childhood. These are managed by cardiologists with experience in adult congenital heart disease.' },
      { q: 'What is recovery like after VSD repair?', a: 'Most children stay in hospital for a few days to a week. Full recovery usually takes several weeks. Your cardiologist will advise on activity and follow-up.' },
    ],
    metaDescription: 'Ventricular septal defect (VSD) repair. Surgical and catheter options. Referral to cardiac specialists. Book a consultation.',
  },
  {
    slug: 'tetralogy-of-fallot-tof-congenital-heart-disease',
    title: 'Tetralogy of Fallot (TOF) repair surgery',
    metaTitle: 'Tetralogy of Fallot (TOF) repair surgery',
    shortDescription: 'Surgery to correct Tetralogy of Fallot—a complex congenital heart defect. Usually done in infancy with long-term follow-up.',
    image: '/assets/images/case-congenital.png',
    href: '/surgery/tetralogy-of-fallot-tof-congenital-heart-disease',
    sections: [
      {
        heading: 'What is Tetralogy of Fallot?',
        body: 'Tetralogy of Fallot (TOF) is a congenital heart defect with four features: (1) a large ventricular septal defect (VSD), (2) narrowing of the outflow from the right ventricle to the lungs (pulmonary stenosis), (3) the aorta “overriding” the VSD (sitting over the hole), and (4) thickening of the right ventricle. As a result, oxygen-poor blood can mix with oxygen-rich blood and be pumped to the body, causing low oxygen levels (cyanosis—bluish skin and lips), shortness of breath, fatigue, poor growth, fainting, and clubbing of fingers and toes. Without repair, TOF can lead to heart failure, arrhythmias, stroke, pulmonary hypertension, and other serious complications. The cause is not fully known; genetic and environmental factors (e.g. maternal diabetes, certain medications or infections during pregnancy) may play a role.',
      },
      {
        heading: 'Diagnosis and treatment',
        body: 'TOF is usually diagnosed in infancy by examination (cyanosis, heart murmur), echocardiography, ECG, and chest X-ray. Surgical repair is the main treatment and is typically done in the first year of life (often in the first few months). The surgeon closes the VSD and widens the narrow pathway to the lungs. In some babies, a temporary shunt operation is done first to improve blood flow to the lungs before full repair. After repair, most children do well but need lifelong cardiology follow-up; some need further procedures or medication later. We can refer you to a paediatric cardiac centre for diagnosis, surgery, and long-term care.',
      },
      {
        heading: 'Recovery and long-term care',
        body: 'After TOF repair, children usually stay in hospital for several days to a couple of weeks. Pain relief, monitoring of heart rhythm and function, and gradual feeding and activity are part of recovery. At home, you will be advised on wound care, activity limits, and when to seek help (e.g. fever, poor feeding, breathlessness). Lifelong follow-up with a cardiologist is important to check the heart, valves, and rhythm; some children need further surgery on the pulmonary valve or treatment for arrhythmias in later life. Good dental care and antibiotics before certain dental procedures may be recommended to reduce the risk of heart infection. We can refer you to a paediatric cardiac centre for diagnosis, surgery, and long-term care.',
      },
    ],
    faq: [
      { q: 'Can TOF be cured?', a: 'Surgery does not make the heart completely normal but corrects the main defects so that most children can grow and lead active lives. Lifelong follow-up with a cardiologist is important.' },
      { q: 'What happens after TOF repair?', a: 'Many children do well. Some need further procedures (e.g. on the pulmonary valve) or treatment for arrhythmias. Your cardiac team will advise on activity, antibiotics for dental work, and follow-up.' },
      { q: 'At what age is TOF repair done?', a: 'Repair is usually planned in infancy or early childhood, depending on the baby’s condition and the centre’s practice. Early repair helps prevent long-term complications.' },
      { q: 'Can TOF be prevented?', a: 'TOF is congenital; it cannot always be prevented. Good prenatal care, managing diabetes and other health conditions in pregnancy, and avoiding certain medications and alcohol may help reduce the risk of congenital heart defects in general.' },
    ],
    metaDescription: 'Tetralogy of Fallot (TOF) repair surgery. Referral to paediatric cardiac specialists. Book a consultation.',
  },
  {
    slug: 'patent-ductus-arteriosus-pda-congenital-heart-disease',
    title: 'Patent ductus arteriosus (PDA) treatment',
    metaTitle: 'Patent ductus arteriosus (PDA) treatment',
    shortDescription: 'Treatment for PDA—when the fetal blood vessel between aorta and pulmonary artery stays open after birth. Medication or closure by device/surgery.',
    image: '/assets/images/case-congenital.png',
    href: '/surgery/patent-ductus-arteriosus-pda-congenital-heart-disease',
    sections: [
      {
        heading: 'What is PDA?',
        body: 'The ductus arteriosus is a blood vessel that in the fetus allows blood to bypass the lungs (because the baby gets oxygen from the mother). After birth, when the baby breathes and the lungs take over, this vessel normally closes within the first hours or days of life. If it stays open (patent), it is called a PDA. Blood then flows from the aorta into the pulmonary artery, overloading the lungs and heart. In premature babies a PDA is more common and can cause breathing difficulty, heart failure, or need for more ventilator support. In full-term babies and older children, a small PDA may cause no symptoms (sometimes found because of a heart murmur); a large PDA can cause fast breathing, poor growth, and recurrent chest infections. Untreated, a significant PDA increases the risk of heart failure and infection of the heart lining (endocarditis).',
      },
      {
        heading: 'Treatment options',
        body: 'In newborns, the duct may close on its own; if the baby is stable, the team may wait. In premature babies, medicine (e.g. indomethacin or ibuprofen) is often tried first to encourage the duct to close. If the PDA is large or does not close, or in older infants and children, closure is usually recommended. This can be done by catheter: a device or coil is passed from a vein (often in the groin) to the heart and used to block the duct. Surgery is an option when the PDA is very large, when anatomy is not suitable for a device, or when preferred by the team. Surgery involves a small cut between the ribs; the duct is tied and cut. Risks of either approach are generally low. We can refer you or your child to a cardiologist for assessment and the best option.',
      },
      {
        heading: 'Diagnosis and recovery',
        body: 'PDA is often suspected when a doctor hears a characteristic heart murmur. In newborns, symptoms such as fast breathing or heart failure may prompt an echocardiogram to confirm the diagnosis. Chest X-ray and other tests may be used to assess heart size and lung blood flow. After closure (by device or surgery), recovery is usually straightforward: a short stay in hospital, wound care if surgery was done, and follow-up with the cardiologist to confirm the duct is closed and the heart is working well. Long-term outlook after successful closure is excellent. We can refer you or your child to a cardiologist for assessment and the best option.',
      },
    ],
    faq: [
      { q: 'Can PDA close on its own?', a: 'In full-term babies the duct often closes in the first days of life. In premature babies, medicine is often tried first. If the PDA remains significant, closure by device or surgery is usually recommended.' },
      { q: 'Is PDA closure safe?', a: 'Device closure and surgery are well-established and generally safe. Your cardiologist will explain the benefits and risks for your or your child’s situation.' },
      { q: 'When is it good for the duct to stay open?', a: 'In some heart defects (e.g. certain types of pulmonary or aortic obstruction), the duct is needed to supply blood to the lungs or body. In those cases, medicine may be used to keep it open until surgery is done.' },
      { q: 'How long is recovery after PDA closure?', a: 'After catheter closure, many children go home within a day or two. After surgery, a short hospital stay and a few weeks of avoiding strenuous activity are typical. Your cardiologist will give specific advice.' },
    ],
    metaDescription: 'Patent ductus arteriosus (PDA) treatment and closure. Referral to cardiac specialists. Book a consultation.',
  },
  {
    slug: 'atrioventricular-canal-defect-avc',
    title: 'Atrioventricular canal defect (AVCD) surgery',
    metaTitle: 'Atrioventricular canal defect (AVCD) surgery',
    shortDescription: 'Surgery to repair a defect in the centre of the heart affecting the septum and valves. Usually done in the first year of life.',
    image: '/assets/images/case-congenital.png',
    href: '/surgery/atrioventricular-canal-defect-avc',
    sections: [
      {
        heading: 'What is AV canal defect?',
        body: 'Atrioventricular canal defect (AVCD), also called atrioventricular septal defect or endocardial cushion defect, is a congenital heart condition in which there is a hole in the centre of the heart and abnormal valves between the upper and lower chambers. In the complete form, there is a large hole involving both the atrial and ventricular septa and a single common valve instead of separate mitral and tricuspid valves. In the partial form, the defect is smaller and may mainly affect the atrial septum and mitral valve. Extra blood flows to the lungs, the heart has to work harder and can enlarge, and without repair, heart failure and high blood pressure in the lungs (pulmonary hypertension) can develop. AVCD is often associated with Down syndrome. Risk factors include family history of congenital heart disease, maternal diabetes, and certain infections or medications during pregnancy.',
      },
      {
        heading: 'Symptoms, diagnosis and treatment',
        body: 'Symptoms may include fast or laboured breathing, poor feeding, failure to thrive, bluish skin (cyanosis), heart murmur, and recurrent chest infections. Diagnosis is made by echocardiography (including fetal echo in some pregnancies), ECG, and sometimes other tests. Surgery is usually recommended in the first year of life (often before 6 months) to close the holes and reconstruct the valves. Repair is done with open-heart surgery. After surgery, many children do well but need lifelong cardiology follow-up; some need further surgery on the valves later. We can refer you to a paediatric cardiac surgical centre for evaluation and care.',
      },
      {
        heading: 'Recovery and follow-up',
        body: 'After AVCD repair, the child typically stays in hospital for several days to a couple of weeks. The team will monitor heart function, rhythm, and wound healing. At home, you will receive advice on feeding, activity, and when to seek help. Lifelong follow-up with a paediatric (and later adult) congenital heart specialist is standard to check the repaired valves and heart function; some children need further surgery or treatment for rhythm problems later. We can refer you to a paediatric cardiac surgical centre for evaluation and care.',
      },
    ],
    faq: [
      { q: 'Is AVCD always linked to Down syndrome?', a: 'A significant proportion of children with AVCD have Down syndrome, but AVCD can occur in any child. Genetic counselling may be offered.' },
      { q: 'What is the outlook after AVCD repair?', a: 'Many children do well after repair. Some need further surgery on the valves or treatment for rhythm problems. Lifelong cardiology follow-up is standard.' },
      { q: 'When is surgery done?', a: 'Repair is typically planned in the first year of life, often before 6 months, to prevent heart failure and pulmonary hypertension.' },
      { q: 'What are the risks of AVCD surgery?', a: 'As with any open-heart surgery, there are risks of bleeding, infection, and rhythm problems. Your cardiac surgical team will explain how these are minimised and managed.' },
    ],
    metaDescription: 'Atrioventricular canal defect (AVCD) repair surgery. Referral to paediatric cardiac specialists. Book a consultation.',
  },
  {
    slug: 'coarctation-of-the-aorta-coa-congenital-heart-disease',
    title: 'Coarctation of the aorta (COA) surgery',
    metaTitle: 'Coarctation of the aorta (COA) surgery',
    shortDescription: 'Repair of narrowing of the main artery (aorta). By surgery or balloon/catheter in selected cases. Restores normal blood flow and blood pressure.',
    image: '/assets/images/case-congenital.png',
    href: '/surgery/coarctation-of-the-aorta-coa-congenital-heart-disease',
    sections: [
      {
        heading: 'What is coarctation of the aorta?',
        body: 'Coarctation of the aorta (COA) is a narrowing of the aorta—the main artery that carries blood from the heart to the body. The narrowing is often near where the ductus arteriosus (fetal vessel) closes, and may be related to that process. Blood pressure is higher above the narrowing and lower below; the left ventricle has to work harder and can thicken. In babies, COA can cause heart failure or severe high blood pressure soon after birth. In older children or adults, it may be found when high blood pressure is detected; some have no symptoms. If left untreated, COA can lead to heart failure, rupture or aneurysm of the aorta, and increased risk of stroke or heart attack. It sometimes occurs with other heart defects.',
      },
      {
        heading: 'Treatment and follow-up',
        body: 'Repair is recommended when the narrowing is significant or causes symptoms (e.g. heart failure, high blood pressure). In newborns and small infants, surgery is often used: the narrow segment may be removed and the ends joined, or a patch or graft may be used. In older children and adults, balloon dilation and stenting via catheter are often an option and may avoid open surgery. After repair, long-term follow-up is important: blood pressure may remain high (especially if repair was done after early childhood), the narrowing can recur (recoarctation), or the aorta may dilate (aneurysm). We can refer you or your child to a cardiologist or cardiac surgeon for assessment and the best approach.',
      },
      {
        heading: 'Diagnosis and life after repair',
        body: 'COA may be suspected when blood pressure is higher in the arms than in the legs, or when a heart murmur or weak leg pulses are found. Echocardiography, MRI, or CT can show the narrowing and its effect on the heart. After repair, many people lead normal, active lives. You will need regular checks of blood pressure and imaging of the aorta to watch for recoarctation or aneurysm. Some people need antibiotics before dental procedures to reduce the risk of heart valve infection. Pregnancy is possible for women with repaired COA but should be planned with a cardiologist. We can refer you or your child to a cardiologist or cardiac surgeon for assessment and the best approach.',
      },
    ],
    faq: [
      { q: 'Can coarctation be treated with a catheter?', a: 'In many older children and adults, balloon dilation and stenting can be used instead of surgery. In newborns and small infants, surgery is often preferred. Your cardiologist will advise.' },
      { q: 'Will I need long-term follow-up?', a: 'Yes. Blood pressure and the aorta should be monitored for life. Some people need further treatment for recoarctation or aneurysm.' },
      { q: 'Can COA be repaired in adulthood?', a: 'Yes. Coarctation can be repaired at any age. It should be treated once diagnosed if the narrowing is significant, to reduce the risk of complications.' },
      { q: 'What happens if COA is not treated?', a: 'Untreated COA can lead to heart failure, high blood pressure, aneurysm or rupture of the aorta, stroke, and heart attack. Repair greatly reduces these risks.' },
    ],
    metaDescription: 'Coarctation of the aorta (COA) repair. Surgical and catheter options. Referral to cardiac specialists. Book a consultation.',
  },
  {
    slug: 'mitral-valve-repairreplacement-mvr',
    title: 'Mitral valve repair / replacement (MVR)',
    metaTitle: 'Mitral valve repair / replacement (MVR)',
    shortDescription: 'Surgery to repair or replace the mitral valve when it is leaking or narrowed. Restores normal heart function and relieves symptoms.',
    image: '/assets/images/case-common.png',
    href: '/surgery/mitral-valve-repairreplacement-mvr',
    sections: [
      {
        heading: 'What is mitral valve disease?',
        body: 'The mitral valve sits between the left atrium and left ventricle and ensures blood flows forward into the ventricle. When it does not open fully (stenosis), blood backs up and pressure in the lungs can rise. When it does not close properly (regurgitation), blood leaks back into the atrium. Causes include mitral valve prolapse (floppy valve), rheumatic heart disease (after strep infection), infection (endocarditis), and degenerative changes. Symptoms can include breathlessness, fatigue, chest pain, palpitations, and swelling of the legs. Severe disease can lead to heart failure, atrial fibrillation, or pulmonary hypertension. Surgery is recommended when the valve is severely diseased, symptoms are present, or the heart is enlarging or weakening.',
      },
      {
        heading: 'Repair vs replacement',
        body: 'Repair is preferred when possible: it preserves your own valve and often avoids the need for long-term blood thinners. The surgeon may reshape, trim, or support the valve. When repair is not feasible, the valve is replaced with a mechanical valve (durable but requires lifelong anticoagulation) or a biological valve (from human or animal tissue; may not need blood thinners but can wear out over years). The operation is done under general anaesthesia, usually with a heart-lung machine. Recovery typically involves several days in hospital and a few weeks to months for full recovery. Risks include bleeding, infection, stroke, arrhythmias, and valve-related complications. We can refer you to a cardiac surgeon for assessment and to discuss the best option for you.',
      },
      {
        heading: 'Diagnosis and recovery',
        body: 'Mitral valve disease is diagnosed by symptoms, examination (heart murmur), echocardiography (ultrasound of the heart), and sometimes stress tests or cardiac MRI. Your cardiologist will assess severity and timing for surgery. After the operation, you will be monitored in hospital; most people go home within about a week. You will need to care for the wound, avoid heavy lifting and driving for a period, and take any prescribed medicines (including blood thinners if you have a mechanical valve). Follow-up echocardiograms are done to check the valve and heart function. With a successful repair or replacement, symptoms usually improve and long-term outlook is good. We can refer you to a cardiac surgeon and arrange follow-up care.',
      },
    ],
    faq: [
      { q: 'Is repair better than replacement?', a: 'When the valve can be repaired, it is often preferred: it may preserve heart function better and avoid the need for lifelong blood thinners (required with mechanical valves). Your surgeon will advise based on your valve anatomy.' },
      { q: 'What are the risks of mitral valve surgery?', a: 'Risks include bleeding, infection, stroke, arrhythmias, and failure or infection of the new valve. Your cardiac team will explain how these are minimised and managed.' },
      { q: 'How long is recovery?', a: 'Most people stay in hospital for about 5–7 days. Full recovery may take several weeks to months. You will need follow-up to check the valve and heart function.' },
      { q: 'When should I have mitral valve surgery?', a: 'Surgery is usually recommended when the valve is severely leaky or narrowed, you have symptoms (e.g. breathlessness, fatigue), or tests show the heart is enlarging or weakening. Your cardiologist will advise on the best timing.' },
    ],
    metaDescription: 'Mitral valve repair and replacement (MVR). Referral to cardiac surgery. Book a consultation.',
  },
  {
    slug: 'aortic-valve-repairreplacement-avr',
    title: 'Aortic valve repair / replacement (AVR)',
    metaTitle: 'Aortic valve repair / replacement (AVR)',
    shortDescription: 'Surgery to repair or replace the aortic valve when it is narrowed or leaking. Restores blood flow from the heart to the body.',
    image: '/assets/images/case-common.png',
    href: '/surgery/aortic-valve-repairreplacement-avr',
    sections: [
      {
        heading: 'What is aortic valve disease?',
        body: 'The aortic valve controls blood flow from the left ventricle into the aorta and thus to the body. When it is narrowed (aortic stenosis), the heart must work harder to pump blood; when it is leaky (aortic regurgitation), blood flows back into the ventricle. Causes include wear and tear with age (calcification), a congenital bicuspid valve (two leaflets instead of three), rheumatic heart disease, and infection. Symptoms may include chest pain, breathlessness, fainting, and fatigue. Severe aortic stenosis can cause sudden death; severe disease of either type can lead to heart failure. There are no medicines that fix the valve; when the disease is severe, surgery or a catheter-based procedure is needed.',
      },
      {
        heading: 'Treatment options',
        body: 'Open-heart surgery to replace the valve is the standard treatment. The damaged valve is removed and replaced with a mechanical or biological prosthesis. Transcatheter aortic valve implantation (TAVI) is an alternative for some patients: a replacement valve is delivered via a catheter (usually through the groin) and expanded inside the old valve, without open surgery. TAVI is often used in older or higher-risk patients. Other options in selected cases include balloon valvuloplasty (to widen a stenotic valve, often as a temporary measure) or sutureless valve replacement. Recovery from open surgery usually involves about a week in hospital and several weeks to months at home. Risks include infection, bleeding, stroke, arrhythmias, and kidney or valve-related problems. We can refer you to a cardiac surgeon or TAVI team to discuss the best option for you.',
      },
      {
        heading: 'Diagnosis and recovery',
        body: 'Aortic valve disease is diagnosed by symptoms, examination (heart murmur), echocardiography, and sometimes stress tests or cardiac catheterisation. Your cardiologist will assess severity; severe aortic stenosis or regurgitation often needs intervention to prevent heart failure or sudden death. After surgery or TAVI, you will be monitored in hospital and usually go home within about a week. You will need wound care, a period of restricted activity, and any prescribed medicines (including blood thinners for mechanical valves). Follow-up scans check the new valve and heart function. With successful treatment, symptoms typically improve and long-term outlook is good. We can refer you to a cardiac surgeon or TAVI team and arrange follow-up.',
      },
    ],
    faq: [
      { q: 'What is TAVI?', a: 'TAVI (transcatheter aortic valve implantation) is a way to replace the aortic valve using a catheter, without open-heart surgery. It is often used for older or higher-risk patients. Not everyone is a candidate; your team will advise.' },
      { q: 'Mechanical vs biological valve?', a: 'Mechanical valves last a long time but require lifelong blood thinners to prevent clots. Biological valves (from animal or human tissue) usually do not require blood thinners but may need to be replaced after 10–20 years. Your surgeon will help you choose based on your age and preferences.' },
      { q: 'What are the risks of aortic valve replacement?', a: 'Risks include infection, bleeding, stroke, arrhythmias, and kidney problems. The risk of death from the operation is typically around 1–3%, but the risk of leaving severe valve disease untreated is higher. Your team will explain the balance for you.' },
      { q: 'When should aortic valve disease be treated?', a: 'Severe aortic stenosis or regurgitation usually needs surgery or TAVI, especially if you have symptoms (chest pain, breathlessness, fainting) or if tests show the heart is struggling. Delaying treatment can be dangerous; your cardiologist will advise on timing.' },
    ],
    metaDescription: 'Aortic valve repair and replacement (AVR). Surgical and TAVI options. Referral to cardiac surgery. Book a consultation.',
  },
];

/** Get procedure by slug for detail page. Returns null if not found. */
export function getProcedureBySlug(slug: string): ProcedureDetail | null {
  return PROCEDURES_LIST.find((p) => p.slug === slug) ?? null;
}

/** Slugs for static generation of /surgery/[slug]. Excludes conjoined-twins-surgery (lives at /conjoined-twins-surgery). */
export function getSurgeryDetailSlugs(): string[] {
  return PROCEDURES_LIST.filter((p) => p.href.startsWith('/surgery/')).map((p) => p.slug);
}
