﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace projetParis
{
    public partial class ConnexionPage : Form
    {
        public ConnexionPage()
        {
            InitializeComponent();
        }

        private void labelSlogan_Click(object sender, EventArgs e)
        {
           
        }

        private void textBoxMdp_TextChanged(object sender, EventArgs e)
        {

        }

        private void ConnexionPage_Load(object sender, EventArgs e)
        {

        }

        private void labelForInsription_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
        {
            this.Hide();
            InscriptionPage inscriptionPage = new InscriptionPage();
            inscriptionPage.ShowDialog();
            this.Close();
        }

        private void buttonConnexion_Click(object sender, EventArgs e)
        {
           
            this.Hide();
            Accueil accueilPage = new Accueil();
            accueilPage.ShowDialog();
            this.Close();
        }
    }
}
