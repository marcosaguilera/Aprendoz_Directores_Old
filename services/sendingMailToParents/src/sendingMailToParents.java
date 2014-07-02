import javax.mail.MessagingException;
import javax.mail.Message;
import javax.mail.Message.*;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import java.util.Date;
import java.text.DateFormat;
import java.util.Calendar;
import java.text.SimpleDateFormat;
import java.lang.String;
import java.util.*;
import java.io.*;
import java.util.*;
import javax.mail.*;
import javax.mail.internet.*;
import java.net.*;

public class sendingMailToParents extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
      public String enviarNotificacionAlmuerzo(String correopadre, String correomadre){
    try{
            Properties props = new Properties();
            props.setProperty("mail.smtp.host", "smtp.gmail.com");
            props.setProperty("mail.smtp.starttls.enable", "true");
            props.setProperty("mail.smtp.port", "587");
            props.setProperty("mail.smtp.user", "eventualidades@rochester.edu.co");
            props.setProperty("mail.smtp.auth", "true");
            
            Session session = Session.getDefaultInstance(props);
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress("eventualidades@rochester.edu.co"));        
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correopadre));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress(correomadre));
               message.addRecipient(
                  Message.RecipientType.TO, new InternetAddress("eventualidades@rochester.edu.co"));                    
            
            message.setSubject("No Reply - Proceso de matrícula");
            message.setText(
               "<img src=\"http://www.rochester.edu.co/images/logo.png\">"+"<br/><br/>"+
              "NOTIFICACIÓN - COLEGIO ROCHESTER<br/><br/>"+
              "<br/>"+
              "Buen día apreciado Padre de familia, esta comunicación se envía para notificarle que a partir de este momento puede realizar el proceso de matrícula de su hijo(a) en la dirección:<br><br>"+
              "<br/>"+
              "http://aprendoz.rochester.edu.co:8080/matriculasJ11/login.html<br/><br/>"+
              "Si tiene alguna duda por favor comuníquese con el área de soporte en el 7496000 ext. 2998 o a través del correo electrónico soporte@rochester.edu.co.<br/><br/>"+
              "<br/>"+
              "Agradecemos su atención,<br><br><br>"+ 
              "Área de Sistemas<br>"+     
              "COLEGIO ROCHESTER<br>"+
              "Vereda Fusca Km. 15<br>"+    
              "Autopista Norte Costado Oriental<br>"+   
              "Chía, Cundinamarca<br>"+   
              "PBX 749 6000 Ext. 2998.<br>"+    
              "Aprendoz Colegio Rochester","ISO-8859-1","html");             
            Transport t = session.getTransport("smtp");
            t.connect("eventualidades@rochester.edu.co", "Rochester1959+");
            t.sendMessage(message, message.getAllRecipients());
            t.close();      
        }catch (Exception e){
         e.printStackTrace();
     }      
    return "ok";
  }
}