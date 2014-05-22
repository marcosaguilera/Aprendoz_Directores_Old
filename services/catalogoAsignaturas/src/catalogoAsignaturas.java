//importar librerias y complementos
import com.aprendoz_test.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;
import com.wavemaker.runtime.server.ParamName;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;
//--------------------------------

import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.export.*;
import net.sf.jasperreports.engine.export.ooxml.*;
import net.sf.jasperreports.engine.util.*;
import net.sf.jasperreports.engine.fill.*;

//--------------------------------
import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import java.awt.*;
import java.awt.Color;
import com.wavemaker.runtime.RuntimeAccess;

public class catalogoAsignaturas extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {
     
    public DownloadResponse getReport(String ida) throws Exception {
    /*        System.out.println(idsy);
        int sy=Integer.valueOf(idsy);
        int idgr= Integer.valueOf(idgrado); */
       // System.out.println("Grado "+idg);
        System.out.println("Asignatura "+ida);
        
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
       
  Aprendoz_test service = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
          service.begin();
          Session session= service.getDataServiceManager().getSession();

       try {
     
          //enviar parametros al reporte
          Map parameters= new HashMap();
         // parameters.put("idgrado", idg);
          parameters.put("idasignatura", ida);
          System.out.println("capturados!");
          
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("catalogo2.jasper");
          System.out.println("#1");
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          System.out.println("#2");
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          System.out.println("#3");
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("catalogo2.jasper"));
          System.out.println("#4");
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          System.out.println("#5");
          ret.setFileName("Catalogo_Asignaturas_"+ida+".pdf");
          
               
       } catch(Exception e) {
          System.out.println("Error creando el PDF");
          e.printStackTrace();
       } 
  finally{
  service.commit();
  }
       return ret;
    }
}