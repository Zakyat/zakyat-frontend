import { GetterTree, ActionTree, MutationTree } from 'vuex';
import apolloProvider from "../apollo.config.js";

export const state = () => ({
  gatherings: [
    {
      id: 309,
      name: 'Бурганова Альфия',
      src: require('@/assets/images/slideshow1.jpg'),
      age: 16,
      problem: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
      description: 'Альфие 16 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что ходить она не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги. В первый класс она пошла в обычную школу. Ей было очень тяжело, ее пальчики не слушались и не получалось писать красивые буквы. Но она настойчиво старалась писать и добилась каллиграфического почерка. Альфия научилась играть на курае и даже заняла второе место в международном конкурсе. К сожалению, болезнь не отступает до конца и она вынуждена проходить неприятные процедуры. Сумма к сбору на лечение Альфии составляет 500 тысяч 500 рублей.',
      collected: 65_065,
      required: 500_500,
    },
    {
      id: 400,
      name: 'Садыков Амирхан',
      src: require('@/assets/images/slideshow2.jpg'),
      age: 12,
      problem: 'Идиопатический прогрессирующий сколиоз 4-й степени, спасет операция',
      description: 'Амирхану 12 лет. В 9 месяцев ей поставили диагноз — ДЦП. Врачи сказали, что ходить она не сможет. Никогда. Но в 2 годика она сделала первые робкие шаги. В первый класс она пошла в обычную школу.',
      collected: 300_000,
      required: 500_500,
    },
  ],
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {

};

export const mutations: MutationTree<RootState> = {

};

export const actions: ActionTree<RootState, RootState> = {

};
