let handler = async (m, { conn, text}) => {
m.reply(`*╔═══════════════════════════*\n➢ *"${pickRandom(global.piropos)}"*\n*╚═══════════════════════════*`)
}
handler.tags = ['قران']
handler.command = ['ايات','قران']
 export default handler
    
 function pickRandom(list) {
 return list[Math.floor(list.length * Math.random())]}
    
 global.piropos = [
"وَما أُبَرِّئُ نَفسي إِنَّ النَّفسَ لَأَمّارَةٌ بِالسّوءِ إِلّا ما رَحِمَ رَبّي إِنَّ رَبّي غَفورٌ رَحيمٌ٣٥۝﴾ [يوسف: ٥٣]﴿",
"﴿قُل مَن بِيَدِهِ مَلَكوتُ كُلِّ شَيءٍ وَهُوَ يُجيرُ وَلا يُجارُ عَلَيهِ إِن كُنتُم تَعلَمونَ٨٨۝﴾ [المؤمنون: ٨٨]",
"﴿وَهُوَ الَّذي أَنشَأَ لَكُمُ السَّمعَ وَالأَبصارَ وَالأَفئِدَةَ قَليلًا ما تَشكُرونَ٨٧۝﴾ [المؤمنون: ٧٨]",
"﴿أَم تَسأَلُهُم خَرجًا فَخَراجُ رَبِّكَ خَيرٌ وَهُوَ خَيرُ الرّازِقينَ٢٧۝﴾ [المؤمنون: ٧٢]",
"﴿وَلا نُكَلِّفُ نَفسًا إِلّا وُسعَها وَلَدَينا كِتابٌ يَنطِقُ بِالحَقِّ وَهُم لا يُظلَمونَ٢٦۝﴾ [المؤمنون: ٦٢]",
"﴿وَكَذلِكَ مَكَّنّا لِيوسُفَ فِي الأَرضِ يَتَبَوَّأُ مِنها حَيثُ يَشاءُ نُصيبُ بِرَحمَتِنا مَن نَشاءُ وَلا نُضيعُ أَجرَ المُحسِنينَ٦٥۝وَلَأَجرُ الآخِرَةِ خَيرٌ لِلَّذينَ آمَنوا وَكانوا يَتَّقونَ٧٥۝﴾ [يوسف: ٥٦-٥٧]",
"﴿وَما عَلَينا إِلَّا البَلاغُ المُبينُ٧١۝﴾ [يس: ١٧]",
"﴿وَما أُبَرِّئُ نَفسي إِنَّ النَّفسَ لَأَمّارَةٌ بِالسّوءِ إِلّا ما رَحِمَ رَبّي إِنَّ رَبّي غَفورٌ رَحيمٌ٣٥۝﴾ [يوسف: ٥٣]",
"{ الرَّحْمَـٰنُ (1) عَلَّمَ الْقُرْآنَ (2) خَلَقَ الْإِنسَانَ (3) عَلَّمَهُ الْبَيَانَ (4) الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ (5) وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ (6) وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ (7) أَلَّا تَطْغَوْا فِي الْمِيزَانِ (8) وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ وَلَا تُخْسِرُوا الْمِيزَانَ (9) وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ (10) فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ (11) وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ (12) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (13) خَلَقَ الْإِنسَانَ مِن صَلْصَالٍ كَالْفَخَّارِ (14) وَخَلَقَ الْجَانَّ مِن مَّارِجٍ مِّن نَّارٍ (15) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (16) رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ (17) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (18) مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ (19) بَيْنَهُمَا بَرْزَخٌ لَّا يَبْغِيَانِ (20) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (21) يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ (22) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (23) وَلَهُ الْجَوَارِ الْمُنشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ (24) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (25) كُلُّ مَنْ عَلَيْهَا فَانٍ (26) وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ (27) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (28) يَسْأَلُهُ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ ۚ كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ (29) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (30) سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ (31) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (32) يَا مَعْشَرَ الْجِنِّ وَالْإِنسِ إِنِ اسْتَطَعْتُمْ أَن تَنفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ فَانفُذُوا ۚ لَا تَنفُذُونَ إِلَّا بِسُلْطَانٍ (33) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (34) يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِّن نَّارٍ وَنُحَاسٌ فَلَا تَنتَصِرَانِ (35) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (36) فَإِذَا انشَقَّتِ السَّمَاءُ فَكَانَتْ وَرْدَةً كَالدِّهَانِ (37) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (38) فَيَوْمَئِذٍ لَّا يُسْأَلُ عَن ذَنبِهِ إِنسٌ وَلَا جَانٌّ (39) فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (40) }*\n*[ سورة الرحمن : 1 إلى 40 ] ",
"{ هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ لَمْ يَكُن شَيْئًا مَّذْكُورًا (1) إِنَّا خَلَقْنَا الْإِنسَانَ مِن نُّطْفَةٍ أَمْشَاجٍ نَّبْتَلِيهِ فَجَعَلْنَاهُ سَمِيعًا بَصِيرًا (2) إِنَّا هَدَيْنَاهُ السَّبِيلَ إِمَّا شَاكِرًا وَإِمَّا كَفُورًا (3) إِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَلَاسِلَ وَأَغْلَالًا وَسَعِيرًا (4) إِنَّ الْأَبْرَارَ يَشْرَبُونَ مِن كَأْسٍ كَانَ مِزَاجُهَا كَافُورًا (5) عَيْنًا يَشْرَبُ بِهَا عِبَادُ اللَّهِ يُفَجِّرُونَهَا تَفْجِيرًا (6) يُوفُونَ بِالنَّذْرِ وَيَخَافُونَ يَوْمًا كَانَ شَرُّهُ مُسْتَطِيرًا (7) وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا (8) إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا (9) إِنَّا نَخَافُ مِن رَّبِّنَا يَوْمًا عَبُوسًا قَمْطَرِيرًا (10) فَوَقَاهُمُ اللَّهُ شَرَّ ذَٰلِكَ الْيَوْمِ وَلَقَّاهُمْ نَضْرَةً وَسُرُورًا (11) وَجَزَاهُم بِمَا صَبَرُوا جَنَّةً وَحَرِيرًا (12) مُّتَّكِئِينَ فِيهَا عَلَى الْأَرَائِكِ ۖ لَا يَرَوْنَ فِيهَا شَمْسًا وَلَا زَمْهَرِيرًا (13) وَدَانِيَةً عَلَيْهِمْ ظِلَالُهَا وَذُلِّلَتْ قُطُوفُهَا تَذْلِيلًا (14) وَيُطَافُ عَلَيْهِم بِآنِيَةٍ مِّن فِضَّةٍ وَأَكْوَابٍ كَانَتْ قَوَارِيرَا (15) قَوَارِيرَ مِن فِضَّةٍ قَدَّرُوهَا تَقْدِيرًا (16) وَيُسْقَوْنَ فِيهَا كَأْسًا كَانَ مِزَاجُهَا زَنجَبِيلًا (17) عَيْنًا فِيهَا تُسَمَّىٰ سَلْسَبِيلًا (18) ۞ وَيَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُّخَلَّدُونَ إِذَا رَأَيْتَهُمْ حَسِبْتَهُمْ لُؤْلُؤًا مَّنثُورًا (19) وَإِذَا رَأَيْتَ ثَمَّ رَأَيْتَ نَعِيمًا وَمُلْكًا كَبِيرًا (20) عَالِيَهُمْ ثِيَابُ سُندُسٍ خُضْرٌ وَإِسْتَبْرَقٌ ۖ وَحُلُّوا أَسَاوِرَ مِن فِضَّةٍ وَسَقَاهُمْ رَبُّهُمْ شَرَابًا طَهُورًا (21) إِنَّ هَـٰذَا كَانَ لَكُمْ جَزَاءً وَكَانَ سَعْيُكُم مَّشْكُورًا (22) إِنَّا نَحْنُ نَزَّلْنَا عَلَيْكَ الْقُرْآنَ تَنزِيلًا (23) فَاصْبِرْ لِحُكْمِ رَبِّكَ وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا (24) وَاذْكُرِ اسْمَ رَبِّكَ بُكْرَةً وَأَصِيلًا (25) وَمِنَ اللَّيْلِ فَاسْجُدْ لَهُ وَسَبِّحْهُ لَيْلًا طَوِيلًا (26) إِنَّ هَـٰؤُلَاءِ يُحِبُّونَ الْعَاجِلَةَ وَيَذَرُونَ وَرَاءَهُمْ يَوْمًا ثَقِيلًا (27) نَّحْنُ خَلَقْنَاهُمْ وَشَدَدْنَا أَسْرَهُمْ ۖ وَإِذَا شِئْنَا بَدَّلْنَا أَمْثَالَهُمْ تَبْدِيلًا (28) إِنَّ هَـٰذِهِ تَذْكِرَةٌ ۖ فَمَن شَاءَ اتَّخَذَ إِلَىٰ رَبِّهِ سَبِيلًا (29) وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ ۚ إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا (30) يُدْخِلُ مَن يَشَاءُ فِي رَحْمَتِهِ ۚ وَالظَّالِمِينَ أَعَدَّ لَهُمْ عَذَابًا أَلِيمًا (31)  } [ سورة الإنسان : 1 إلى 31]"
]