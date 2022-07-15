using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto___RPG_em_POO.src.Entities
{
    public abstract class Hero
    {
        //PROPRIEDADES
        public string Name;
        public int Level;
        public string HeroType;

        //CONSTRUTOR
        public Hero(string Name, int Level, string HeroType)
        {
            this.Name = Name;
            this.Level = Level;
            this.HeroType = HeroType;
        }



        //MÉTODO 1 = imprimir na tela como string.
        public override string ToString(){
            return this.Name + " " + this.Level + " " + this.HeroType;
        }

        //MÉTODO 2 = atacar
        public virtual string Attack(){
            return this.Name + " Atacou com sua espada";
        }


    }
}